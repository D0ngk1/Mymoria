package com.example.mymoria_server.controller;

import com.example.mymoria_server.model.Post;
import com.example.mymoria_server.model.PostAdd;
import com.example.mymoria_server.model.User;
import com.example.mymoria_server.repo.PostRepo;
import com.example.mymoria_server.repo.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/mymoria/")
public class PostController {

    private final PostRepo postRepo;
    private final UserRepo userRepo;
    public PostController(PostRepo postRepo, UserRepo userRepo
                          ){
        this.postRepo=postRepo;
        this.userRepo = userRepo;
    }

    //View All Post
    @GetMapping("/posts")
    public ResponseEntity<List<Post>> post() {
        try{
            //Todo: Implements DTO
            List<Post> posts = new ArrayList<Post>(postRepo.findAll());
            if(posts.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(posts,HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/users/{username}")
    public ResponseEntity<User> user(@PathVariable String username){
        try{
            //Todo: Implements DTO
            User user = userRepo.findByUsername(username);
            return new ResponseEntity<>(user,HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/addPost")
    public ResponseEntity<Post> addPost(@RequestBody Post myPost){
        try{
        //Integer uid = Math.toIntExact(myPost.);
        //todo: Validate User first then setUser

            Post post = postRepo.savePost(myPost);
        return new ResponseEntity<>(myPost, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<Post> deletePost(@PathVariable Integer id){
        try {
            postRepo.deletePost(id);
            return new ResponseEntity<>(null,HttpStatus.OK);
        }catch ( Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}

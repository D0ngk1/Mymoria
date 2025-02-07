package com.example.mymoria_server.service;

import com.example.mymoria_server.repo.PostRepo;

import java.util.List;

public class PostService {
    private final PostRepo postRepo;

    public PostService(PostRepo postRepo){
        this.postRepo = postRepo;
    }

    //public List<Post>

}
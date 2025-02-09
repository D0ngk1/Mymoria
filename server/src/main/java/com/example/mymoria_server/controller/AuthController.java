package com.example.mymoria_server.controller;

import com.example.mymoria_server.model.User;
import com.example.mymoria_server.service.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mymoria/auth")
public class AuthController {

    //private final UserRepo userRepo;
    private final AuthenticationService authenticationService;
    public AuthController(
                          AuthenticationService authenticationService
    ){
        this.authenticationService = authenticationService;
    }

    @GetMapping("/users/{username}/{password}")
    public ResponseEntity<User> user(@PathVariable String username, @PathVariable String password){
        //System.out.println("++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>   " + password);
        try{

            //Todo: Implements DTO
            User user = authenticationService.loginUser(username,password);
            return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

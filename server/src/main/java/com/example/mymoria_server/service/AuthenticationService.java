package com.example.mymoria_server.service;

import com.example.mymoria_server.model.User;
import com.example.mymoria_server.repo.UserRepo;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    public final AuthenticationManager authenticationManager;
    public final UserRepo userRepo;
    public AuthenticationService(AuthenticationManager authenticationManager, UserRepo userRepo) {
        this.authenticationManager = authenticationManager;
        this.userRepo = userRepo;
    }

    public User loginUser(String username,String password){

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username,password));

            SecurityContextHolder.getContext().setAuthentication(auth);
            return userRepo.findByUsername(username).get(0);
        } catch (AuthenticationException e){
            return null;
        }
    }
}

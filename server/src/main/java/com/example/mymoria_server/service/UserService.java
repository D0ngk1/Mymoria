package com.example.mymoria_server.service;

import com.example.mymoria_server.model.User;
import com.example.mymoria_server.repo.UserRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService implements UserDetailsService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //Load user from database
        Optional<User> checkUser = userRepo.findByUsername(username).stream().findFirst();
        return checkUser.orElseThrow(()->new UsernameNotFoundException("User is not valid"));
    }
}

package com.example.mymoria_server.controller;

import com.example.mymoria_server.DTO.LoginRequestDTO;
import com.example.mymoria_server.DTO.LoginResponseDTO;
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

    @PostMapping ("/login")
    public ResponseEntity<LoginResponseDTO> user(@RequestBody LoginRequestDTO loginRequest){
        try{
            LoginResponseDTO user = authenticationService.loginUser(loginRequest.username(),loginRequest.password());
            return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

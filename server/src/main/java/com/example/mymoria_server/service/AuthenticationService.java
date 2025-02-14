package com.example.mymoria_server.service;

import com.example.mymoria_server.DTO.LoginRequestDTO;
import com.example.mymoria_server.DTO.LoginResponseDTO;
import com.example.mymoria_server.DTO.RegistrationDTO;
import com.example.mymoria_server.DTO.UserDTO;
import com.example.mymoria_server.mapper.UserDTOMapper;
import com.example.mymoria_server.model.User;
import com.example.mymoria_server.repo.UserRepo;
import com.example.mymoria_server.security_config.JwtService;
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
    public final JwtService jwtService;
    private final UserDTOMapper userDTOMapper;
    public AuthenticationService(AuthenticationManager authenticationManager, UserRepo userRepo, JwtService jwtService, UserDTOMapper userDTOMapper) {
        this.authenticationManager = authenticationManager;
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.userDTOMapper = userDTOMapper;
    }

    public LoginResponseDTO loginUser(String username, String password){
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username,password));

            //Generate JWT Token
            SecurityContextHolder.getContext().setAuthentication(auth);
            String token = jwtService.generateJwt(auth);

            //System.out.println(token);
            UserDTO userDTO = userDTOMapper.apply(userRepo.findByUsername(username).get(0));
            return new LoginResponseDTO(token,userDTO);

        } catch (AuthenticationException e){
            return null;
        }
    }
    public UserDTO registerUser(RegistrationDTO registrationDTO){
        try {
            /*Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username,password));*/

            //Generate JWT Token
            //SecurityContextHolder.getContext().setAuthentication(auth);
            //String token = jwtService.generateJwt(auth);

            //System.out.println(token);

            return userRepo.registerUser(registrationDTO);

        } catch (AuthenticationException e){
            return null;
        }
    }
}

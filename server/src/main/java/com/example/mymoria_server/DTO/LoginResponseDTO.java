package com.example.mymoria_server.DTO;

import com.example.mymoria_server.model.User;

public record LoginResponseDTO (
    String jwt,
    UserDTO user
){
}

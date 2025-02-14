package com.example.mymoria_server.DTO;

import com.example.mymoria_server.model.Role;

import java.util.Set;

public record RegistrationDTO(
        String username,
        String firstName,
        String lastName,
        String password
        //To add in the future
        /*boolean isEnabled,
        boolean isAccountNotLocked,
        boolean isAccountNotExpired*/
) {
}

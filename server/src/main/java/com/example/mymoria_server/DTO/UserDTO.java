package com.example.mymoria_server.DTO;

import com.example.mymoria_server.model.Role;

import java.util.Set;

public record UserDTO(
        Long userID,
        String username,
        String firstName,
        String lastName,
        Set<Role> role,
        boolean isEnabled,
        boolean isAccountLocked,
        boolean isAccountExpired
) {

}

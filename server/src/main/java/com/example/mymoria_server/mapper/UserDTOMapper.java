package com.example.mymoria_server.mapper;

import com.example.mymoria_server.DTO.UserDTO;
import com.example.mymoria_server.model.Role;
import com.example.mymoria_server.model.User;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class UserDTOMapper implements Function<User, UserDTO> {

    @Override
    public UserDTO apply(User user) {
        Set<Role> roles = user.getAuthorities().stream().filter(
                grantedAuthority -> grantedAuthority instanceof Role)
                .map(auth -> (Role) auth).collect(Collectors.toSet());
        return new UserDTO(
                user.getUserID(),
                user.getUsername(),
                user.getfName(),
                user.getlName(),
                roles,
                user.isEnabled(),
                user.isAccountNonExpired(),
                user.isAccountNonLocked()
        );
    }
}

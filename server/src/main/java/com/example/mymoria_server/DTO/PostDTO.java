package com.example.mymoria_server.DTO;

import java.time.LocalDateTime;

public record PostDTO(
        Long            id,
        Long            userID,
        String          content,
        String          tags,
        LocalDateTime   dateCreated
) {

}

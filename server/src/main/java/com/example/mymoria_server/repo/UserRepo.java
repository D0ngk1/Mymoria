package com.example.mymoria_server.repo;

import com.example.mymoria_server.model.User;
import com.example.mymoria_server.service.UserRowMapper;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepo {
    private final JdbcTemplate template;
    private final UserRowMapper userRowMapper;
    public UserRepo(JdbcTemplate template, UserRowMapper userRowMapper) {
        this.template = template;
        this.userRowMapper = userRowMapper;
    }

    //Find user
    public List<User> findByUsername(String username){
        //SQL queries template
        String sql = "SELECT * from users where username = ?";
        try {
            List<User> users = template.query(sql, userRowMapper, username);
            return users;
        } catch (Exception e) {
            // System.out.println(e);
            // Handle the case when no user is found
            return new ArrayList<>();
        }
    }

}

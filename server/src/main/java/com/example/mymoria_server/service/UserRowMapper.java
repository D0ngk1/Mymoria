package com.example.mymoria_server.service;

import com.example.mymoria_server.model.User;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class UserRowMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        User user = new User();
        user.setUserID(rs.getLong("id")); // Assuming 'id' is a column in the DB
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setfName(rs.getString("first_name"));
        user.setlName(rs.getString("last_name"));
        //user.setEmail(rs.getString("email")); // If you have an email field
        return user;
    }
}

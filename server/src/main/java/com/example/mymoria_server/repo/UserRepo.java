package com.example.mymoria_server.repo;

import com.example.mymoria_server.model.Role;
import com.example.mymoria_server.model.User;
import com.example.mymoria_server.service.UserRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Repository
public class UserRepo {
    private final JdbcTemplate template;
    private final UserRowMapper userRowMapper;
    public UserRepo(JdbcTemplate template, UserRowMapper userRowMapper) {
        this.template = template;
        this.userRowMapper = userRowMapper;
    }

    //Find the user with the username
    public List<User> findByUsername(String username){
        //SQL queries to fetch user from database
        String sql = "SELECT * from users where username = ?";
        try {
            //Fetch user from database(Postgres)
            List<User> users = template.query(sql, userRowMapper, username);

            //Check if exist is empty
            if(users.isEmpty()){
                //return null if user is not registered
                return new ArrayList<>();
            }

            //If the user exist
            //SQL queries to fetch the roles for the user from the database
            //Debugging System.out.println("Getting roles ...........");
            //Notes column of role        r    (id, authority)
            //Notes column of user_role   ur   (username,role)
            String sqlRole =    "SELECT r.id, r.authority from role r "   +
                                "JOIN user_role ur ON r.authority = ur.role " +
                                "WHERE ur.username = ? ";
            List<Role> roles = template.query(sqlRole,(rs, rowNum) ->
                    new Role(rs.getInt("id"),rs.getString("authority")),
                    username);

            //Debugging System.out.println("Roles ---->>>>>" + roles.get(0).getAuthority());
            users.get(0).setAuthorities(Set.copyOf(roles));

            return users;
        } catch (Exception e) {
            // System.out.println(e);
            // Handle the case when no user is found
            return new ArrayList<>();
        }
    }

}

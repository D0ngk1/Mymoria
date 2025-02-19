package com.example.mymoria_server.repo;

import com.example.mymoria_server.DTO.LoginRequestDTO;
import com.example.mymoria_server.DTO.LoginResponseDTO;
import com.example.mymoria_server.DTO.RegistrationDTO;
import com.example.mymoria_server.DTO.UserDTO;
import com.example.mymoria_server.exception.UserAlreadyExistsException;
import com.example.mymoria_server.mapper.UserDTOMapper;
import com.example.mymoria_server.model.Role;
import com.example.mymoria_server.model.User;
import com.example.mymoria_server.service.UserRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
public class UserRepo {
    private final JdbcTemplate template;
    private final UserRowMapper userRowMapper;
    private final UserDTOMapper userDTOMapper;
    public UserRepo(JdbcTemplate template, UserRowMapper userRowMapper, UserDTOMapper userDTOMapper) {
        this.template = template;
        this.userRowMapper = userRowMapper;
        this.userDTOMapper = userDTOMapper;
    }

    //User registration, save the user in the database
    public UserDTO registerUser (RegistrationDTO registrationDTO){


        //To be deleted : System.out.println("Inserting data of user......");
        //Insert data to users database
        String sql = "insert into users (username,first_name,last_name,password) values (?,?,?,?)";
        try {
            template.update(sql,registrationDTO.username(),registrationDTO.firstName(),registrationDTO.lastName(),registrationDTO.password());
        }catch (Exception e){
            throw new RuntimeException("Failed to register user: " + e.getMessage(), e);
        }
        //To be deleted : System.out.println("Inserting data of user,Done!......");
        //Add roles
        Role myRole = new Role(2,"USER");
        Set<Role> myRoles = new HashSet<>();
        myRoles.add(myRole);

        //To be deleted : System.out.println("Inserting role of user......");
        //Insert data to users database
        String roleSql = "insert into user_role (username,role) values (?,?)";
        try {
            template.update(roleSql,registrationDTO.username(),"USER");
        }catch (Exception e){
            throw new RuntimeException("Failed to Add roles user: " + e.getMessage(), e);
        }
        //To be deleted : System.out.println("Inserting role of user,Done!!......");
        User myUser = new User();
        myUser.setUsername(registrationDTO.username());
        myUser.setlName(registrationDTO.lastName());
        myUser.setfName(registrationDTO.firstName());
        myUser.setPassword(registrationDTO.password());
        myUser.setAuthorities(myRoles);

        return userDTOMapper.apply(myUser);
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

            //Debugging System.out.println("Getting roles ...........");

            //If the user exist
            //SQL queries to fetch the roles for the user from the database
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
            System.out.println(e);
            // Handle the case when no user is found
            return new ArrayList<>();
        }
    }

}

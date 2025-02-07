package com.example.mymoria_server.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Set;

public class User implements UserDetails {
    private Long        userID; //Primary Key
    private String      username;
    private String      fName;
    private String      lName;
    private String      password;
    private Set<Role>   authorities;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }
    public void setAuthorities(Set<Role> authorities){
        this.authorities = authorities;
    }
    public User(){
    }

    public User(Long userID, String username, String fName, String lName, String password,Set<Role> authorities) {
        this.userID = userID;
        this.username = username;
        this.fName = fName;
        this.lName = lName;
        this.password = password;
        this.authorities = authorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }
}

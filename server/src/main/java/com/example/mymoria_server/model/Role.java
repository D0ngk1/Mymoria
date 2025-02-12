package com.example.mymoria_server.model;

import org.springframework.security.core.GrantedAuthority;

public class Role implements GrantedAuthority {

    private Integer roleID;
    private String authority;
    //private User user;

    public Role (Integer roleID,String authority){
        this.roleID = roleID;
        this.authority = authority;
    }
    /*Role (User user,Integer roleID,String authority){
        this.roleID = roleID;
        this.authority = authority;
        this.user = user;
    }*/

    Role(String authority) {
        this.authority = authority;
    }
    @Override
    public String getAuthority() {
        return this.authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public Integer getRoleID() {
        return roleID;
    }

    public void setRoleID(Integer roleID) {
        this.roleID = roleID;
    }
/*
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/
}

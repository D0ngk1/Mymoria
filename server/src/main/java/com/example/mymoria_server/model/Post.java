package com.example.mymoria_server.model;


import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;


@Component
@Scope("prototype")
public class Post{


        private Long     id;       // Primary key
        private User     user;    // Foreign key
        private String   content;
        private String   tags;
        private LocalDateTime dateCreated;
        //private LocalDateTime
        //String   comments

    public Post(){}
    public Post(Long id, User user, String content, String tags) {
        this.id = id;
        this.user = user;
        this.content = content;
        this.tags = tags;
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User userID) {
        this.user = userID;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", userID=" + user.getUserID() +
                ", content='" + content + '\'' +
                ", tags='" + tags + '\'' +
                '}';
    }
}
package com.example.mymoria_server.repo;

import com.example.mymoria_server.model.Post;
import com.example.mymoria_server.model.PostAdd;
import com.example.mymoria_server.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

//import java.util.ArrayList;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Repository
public class PostRepo {
    private final JdbcTemplate template;
    public PostRepo( JdbcTemplate template ){
        this.template= template;
    }


    //Todo: Change PostAdd to Post
    public Post savePost(Post post){
        KeyHolder keyHolder = new GeneratedKeyHolder();

        if (post == null || post.getUser() == null || post.getContent() == null) {
            throw new IllegalArgumentException("Post, user, content, and tags cannot be null");
        }
        String sql = "insert into post (userid,content,tags) values (?,?,?)";
        try {
            template.update(connection -> {
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, post.getUser().getUserID());  // Set user_id
                ps.setString(2, post.getContent());         // Set content
                ps.setString(3, post.getTags());            // Set tags
                return ps;
            },keyHolder);


        } catch (Exception e){
            System.out.println("Error!!!!");
            System.out.println(e);
        }
        //Retrieve the auto-generated post_id and set it in the Post object
        Map<String, Object> keyMap = keyHolder.getKeys();
        if (keyMap != null && keyMap.containsKey("id")) {
            post.setId(((Number) keyMap.get("id")).longValue()); // Get only the 'id' key
            //System.out.println("Generated Post ID: " + post.getId());
        }

        //template.update(sql, post.getUserID(),post.getContent(),post.getTags());
        //System.out.println(generatedKey);
        return post;
    }

    public void deletePost(Integer id){
        String sqlDeleteQuery = "delete from post where id=?";
        template.update(sqlDeleteQuery,id);

    }

    public List<Post> findAll() {
        String sql = "SELECT * FROM post";
        return template.query(sql, (rs, rowNum) -> {
            Post post = new Post();
            post.setId(rs.getLong("id"));
            post.setContent(rs.getString("content"));
            post.setTags(rs.getString("tags"));

            // Fetch the associated user (if needed)
            Long userId = rs.getLong("userID");
            User user = new User();
            user.setUserID(userId);
            post.setUser(user);

            return post;
        });
    }

}

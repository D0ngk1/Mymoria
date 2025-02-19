package com.example.mymoria_server;

import com.example.mymoria_server.controller.AuthController;
import com.example.mymoria_server.model.Post;
import com.example.mymoria_server.repo.PostRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.context.event.EventListener;

import java.util.Arrays;

@SpringBootApplication
public class MymoriaServerApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(MymoriaServerApplication.class, args);

		/*Post post1 = context.getBean(Post.class);

		//post1.setId(1);
		post1.setUserID(1);
		post1.setTags("First");
		post1.setContent("This is my first post");

		PostRepo postRepo = context.getBean(PostRepo.class);
		postRepo.savePost(post1);
		System.out.println("Printing All");
		System.out.println(postRepo.findAll());*/
	}

	/*@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx){
		return args -> {
			System.out.println("Let's inspect the beans provided by Spring Boot:");

			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				System.out.println(beanName);
			}
		};
	}*/

}

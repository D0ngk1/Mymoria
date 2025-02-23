package com.example.mymoria_server.security_config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        //config.addAllowedOrigin("http://localhost:4200");  // Allow requests from this origin
        config.addAllowedOriginPattern("*");
        //config.addAllowedOrigin("http://192.168.1.93:8081");
        //config.addAllowedOrigin("https://todo-app-production-598c.up.railway.app");
        config.addAllowedHeader("*");  // Allow all headers
        config.addAllowedMethod("*");  // Allow all HTTP methods (GET, POST, etc.)
        config.setAllowCredentials(true);  // Allow cookies and authentication headers
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
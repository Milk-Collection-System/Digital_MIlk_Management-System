package com.digitalmilk.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    public void addCorsMappings(CorsRegistry r){
        r.addMapping("/**")
         .allowedOriginPatterns("http://localhost:*","http://127.0.0.1:*")
         .allowedMethods("*").allowedHeaders("*");
    }
}

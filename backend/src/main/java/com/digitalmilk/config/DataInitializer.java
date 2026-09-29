package com.digitalmilk.config;

import com.digitalmilk.model.*;
import com.digitalmilk.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner defaultAdmin(AppUserRepository users,PasswordEncoder encoder){
        return args->{
            if(!users.existsByEmailIgnoreCase("admin@digitalmilk.com")){
                AppUser a=new AppUser();
                a.setFullName("System Admin");
                a.setEmail("admin@digitalmilk.com");
                a.setPhone("0000000000");
                a.setAddress("Digital Milk Management System");
                a.setPasswordHash(encoder.encode("Admin@123"));
                a.setRole(Role.ADMIN);
                users.save(a);
                System.out.println("Default admin: admin@digitalmilk.com / Admin@123");
            }
        };
    }
}

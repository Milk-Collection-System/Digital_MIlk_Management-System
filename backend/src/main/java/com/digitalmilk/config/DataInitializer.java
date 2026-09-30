package com.digitalmilk.config;

import com.digitalmilk.model.AppUser;
import com.digitalmilk.model.Role;
import com.digitalmilk.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner defaultAdmin(
            AppUserRepository users,
            PasswordEncoder encoder
    ) {
        return args -> {
            if (!users.existsByEmailIgnoreCase("admin@digitalmilk.com")) {

                AppUser admin = new AppUser();

                admin.setFullName("System Admin");
                admin.setEmail("admin@digitalmilk.com");
                admin.setPhone("0000000000");
                admin.setAddress("Digital Milk Management System");
                admin.setPasswordHash(
                        encoder.encode("Admin@123")
                );
                admin.setRole(Role.ADMIN);

                users.save(admin);

                System.out.println(
                        "Default admin: admin@digitalmilk.com / Admin@123"
                );
            }
        };
    }
}
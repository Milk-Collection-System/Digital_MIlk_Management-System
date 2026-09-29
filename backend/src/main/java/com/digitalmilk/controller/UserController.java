package com.digitalmilk.controller;

import com.digitalmilk.model.AppUser;
import com.digitalmilk.repository.AppUserRepository;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final AppUserRepository users;
    public UserController(AppUserRepository u){users=u;}

    @GetMapping
    public List<Map<String,Object>> list(){
        return users.findAll().stream().map(this::safe).toList();
    }

    private Map<String,Object> safe(AppUser u){
        return Map.of("id",u.getId(),"fullName",u.getFullName(),"email",u.getEmail(),
                "phone",u.getPhone(),"address",u.getAddress(),"role",u.getRole().name(),
                "createdAt",u.getCreatedAt());
    }
}

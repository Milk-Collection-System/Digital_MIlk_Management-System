package com.digitalmilk.controller;

import com.digitalmilk.dto.*;
import com.digitalmilk.model.AppUser;
import com.digitalmilk.repository.AppUserRepository;
import com.digitalmilk.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService auth;
    private final AppUserRepository users;
    public AuthController(AuthService a,AppUserRepository u){auth=a;users=u;}

    @PostMapping("/register") public AuthResponse register(@Valid @RequestBody RegisterRequest r){return auth.register(r);}
    @PostMapping("/login") public AuthResponse login(@Valid @RequestBody LoginRequest r){return auth.login(r);}

    @GetMapping("/me")
    public AuthResponse me(Authentication a){
        AppUser u=users.findByEmailIgnoreCase(a.getName()).orElseThrow();
        return new AuthResponse(null,u.getId(),u.getFullName(),u.getEmail(),u.getRole().name());
    }
}

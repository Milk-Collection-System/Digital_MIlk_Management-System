package com.digitalmilk.service;

import com.digitalmilk.dto.*;
import com.digitalmilk.model.*;
import com.digitalmilk.repository.AppUserRepository;
import com.digitalmilk.security.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthService {
    private final AppUserRepository users;
    private final PasswordEncoder encoder;
    private final JwtService jwt;

    public AuthService(AppUserRepository u,PasswordEncoder e,JwtService j){users=u;encoder=e;jwt=j;}

    public AuthResponse register(RegisterRequest r){
        if(users.existsByEmailIgnoreCase(r.getEmail()))
            throw new ResponseStatusException(HttpStatus.CONFLICT,"Email already registered");
        Role role;
        try{role=Role.valueOf(r.getRole().toUpperCase());}
        catch(Exception e){throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Invalid role");}

        AppUser u=new AppUser();
        u.setFullName(r.getFullName().trim());
        u.setEmail(r.getEmail().trim().toLowerCase());
        u.setPhone(r.getPhone().trim());
        u.setAddress(r.getAddress().trim());
        u.setPasswordHash(encoder.encode(r.getPassword()));
        u.setRole(role);
        u=users.save(u);

        return response(u);
    }

    public AuthResponse login(LoginRequest r){
        AppUser u=users.findByEmailIgnoreCase(r.getEmail())
            .orElseThrow(()->new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Invalid email or password"));
        if(!encoder.matches(r.getPassword(),u.getPasswordHash()))
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Invalid email or password");
        if(!u.getRole().name().equalsIgnoreCase(r.getRole()))
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Account type does not match");
        return response(u);
    }

    private AuthResponse response(AppUser u){
        return new AuthResponse(jwt.generateToken(u.getId(),u.getEmail(),u.getRole().name()),
                u.getId(),u.getFullName(),u.getEmail(),u.getRole().name());
    }
}

package com.digitalmilk.dto;

import jakarta.validation.constraints.*;

public class LoginRequest {
    @Email @NotBlank private String email;
    @NotBlank private String password;
    @NotBlank private String role;

    public String getEmail(){return email;} public String getPassword(){return password;} public String getRole(){return role;}
    public void setEmail(String v){email=v;} public void setPassword(String v){password=v;} public void setRole(String v){role=v;}
}

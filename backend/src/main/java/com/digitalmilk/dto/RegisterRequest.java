package com.digitalmilk.dto;

import jakarta.validation.constraints.*;

public class RegisterRequest {
    @NotBlank private String fullName;
    @Email @NotBlank private String email;
    @NotBlank private String phone;
    @NotBlank private String address;
    @Size(min=6) @NotBlank private String password;
    @NotBlank private String role;

    public String getFullName(){return fullName;} public String getEmail(){return email;}
    public String getPhone(){return phone;} public String getAddress(){return address;}
    public String getPassword(){return password;} public String getRole(){return role;}
    public void setFullName(String v){fullName=v;} public void setEmail(String v){email=v;}
    public void setPhone(String v){phone=v;} public void setAddress(String v){address=v;}
    public void setPassword(String v){password=v;} public void setRole(String v){role=v;}
}

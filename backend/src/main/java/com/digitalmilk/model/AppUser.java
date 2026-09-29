package com.digitalmilk.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class AppUser {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false) private String fullName;
    @Column(nullable=false, unique=true) private String email;
    @Column(nullable=false) private String phone;
    @Column(nullable=false) private String address;
    @Column(nullable=false) private String passwordHash;

    @Enumerated(EnumType.STRING)
    @Column(nullable=false)
    private Role role;

    @Column(nullable=false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public Long getId(){return id;}
    public String getFullName(){return fullName;}
    public String getEmail(){return email;}
    public String getPhone(){return phone;}
    public String getAddress(){return address;}
    public String getPasswordHash(){return passwordHash;}
    public Role getRole(){return role;}
    public LocalDateTime getCreatedAt(){return createdAt;}

    public void setId(Long v){id=v;}
    public void setFullName(String v){fullName=v;}
    public void setEmail(String v){email=v;}
    public void setPhone(String v){phone=v;}
    public void setAddress(String v){address=v;}
    public void setPasswordHash(String v){passwordHash=v;}
    public void setRole(Role v){role=v;}
    public void setCreatedAt(LocalDateTime v){createdAt=v;}
}

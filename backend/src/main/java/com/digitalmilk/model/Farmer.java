package com.digitalmilk.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="farmers")
public class Farmer {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false) private String name;
    @Column(nullable=false) private String mobile;
    @Column(nullable=false) private String address;

    @ManyToOne(fetch=FetchType.LAZY, optional=false)
    @JoinColumn(name="owner_user_id", nullable=false)
    private AppUser ownerUser;

    @Column(nullable=false)
    private LocalDateTime createdAt=LocalDateTime.now();

    public Long getId(){return id;}
    public String getName(){return name;}
    public String getMobile(){return mobile;}
    public String getAddress(){return address;}
    public AppUser getOwnerUser(){return ownerUser;}
    public LocalDateTime getCreatedAt(){return createdAt;}

    public void setId(Long v){id=v;}
    public void setName(String v){name=v;}
    public void setMobile(String v){mobile=v;}
    public void setAddress(String v){address=v;}
    public void setOwnerUser(AppUser v){ownerUser=v;}
    public void setCreatedAt(LocalDateTime v){createdAt=v;}
}

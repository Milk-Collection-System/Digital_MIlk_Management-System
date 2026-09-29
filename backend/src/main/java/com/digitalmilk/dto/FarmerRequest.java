package com.digitalmilk.dto;

import jakarta.validation.constraints.NotBlank;

public class FarmerRequest {
    @NotBlank private String name;
    @NotBlank private String mobile;
    @NotBlank private String address;

    public String getName(){return name;} public String getMobile(){return mobile;} public String getAddress(){return address;}
    public void setName(String v){name=v;} public void setMobile(String v){mobile=v;} public void setAddress(String v){address=v;}
}

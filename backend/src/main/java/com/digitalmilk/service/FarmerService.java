package com.digitalmilk.service;

import com.digitalmilk.dto.FarmerRequest;
import com.digitalmilk.model.*;
import com.digitalmilk.repository.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Service
public class FarmerService {
    private final FarmerRepository farmers;
    private final AppUserRepository users;

    public FarmerService(FarmerRepository f,AppUserRepository u){farmers=f;users=u;}

    public List<Farmer> list(Long userId,String role){
        return "ADMIN".equals(role)?farmers.findAll():farmers.findByOwnerUserIdOrderByIdDesc(userId);
    }

    public Farmer getOwned(Long id,Long userId,String role){
        Farmer f=farmers.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Farmer not found"));
        if("ADMIN".equals(role)||f.getOwnerUser().getId().equals(userId)) return f;
        throw new ResponseStatusException(HttpStatus.FORBIDDEN,"You cannot access this farmer");
    }

    public Farmer create(FarmerRequest r,Long userId){
        AppUser owner=users.findById(userId).orElseThrow();
        Farmer f=new Farmer();
        f.setName(r.getName().trim()); f.setMobile(r.getMobile().trim());
        f.setAddress(r.getAddress().trim()); f.setOwnerUser(owner);
        return farmers.save(f);
    }

    public Farmer update(Long id,FarmerRequest r,Long userId,String role){
        Farmer f=getOwned(id,userId,role);
        f.setName(r.getName().trim()); f.setMobile(r.getMobile().trim()); f.setAddress(r.getAddress().trim());
        return farmers.save(f);
    }

    public void delete(Long id,Long userId,String role){farmers.delete(getOwned(id,userId,role));}
}

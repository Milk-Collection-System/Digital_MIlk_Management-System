package com.digitalmilk.service;

import com.digitalmilk.dto.MilkCollectionRequest;
import com.digitalmilk.model.*;
import com.digitalmilk.repository.MilkCollectionRepository;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.math.RoundingMode;
import java.util.List;

@Service
public class MilkCollectionService {
    private final MilkCollectionRepository collections;
    private final FarmerService farmerService;

    public MilkCollectionService(MilkCollectionRepository c,FarmerService f){collections=c;farmerService=f;}

    public List<MilkCollection> list(Long userId,String role){
        return "ADMIN".equals(role)?collections.findAllByOrderByCollectionDateDescCollectionTimeDesc()
                :collections.findByFarmerOwnerUserIdOrderByCollectionDateDescCollectionTimeDesc(userId);
    }

    public MilkCollection create(MilkCollectionRequest r,Long userId,String role){
        Farmer f=farmerService.getOwned(r.getFarmerId(),userId,role);
        MilkCollection c=new MilkCollection();
        c.setFarmer(f); c.setCollectionDate(r.getCollectionDate()); c.setCollectionTime(r.getCollectionTime());
        c.setMilkType(r.getMilkType()); c.setLitres(r.getLitres()); c.setFat(r.getFat());
        c.setSnf(r.getSnf()); c.setLct(r.getLct()); c.setRate(r.getRate());
        c.setAmount(r.getLitres().multiply(r.getRate()).setScale(2,RoundingMode.HALF_UP));
        return collections.save(c);
    }

    public MilkCollection get(Long id,Long userId,String role){
        MilkCollection c=collections.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Collection not found"));
        farmerService.getOwned(c.getFarmer().getId(),userId,role);
        return c;
    }

    public void delete(Long id,Long userId,String role){collections.delete(get(id,userId,role));}
}

package com.digitalmilk.service;

import com.digitalmilk.model.MilkCollection;
import com.digitalmilk.repository.*;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

@Service
public class DashboardService {
    private final AppUserRepository users;
    private final FarmerRepository farmers;
    private final MilkCollectionRepository collections;
    private final PaymentRepository payments;

    public DashboardService(AppUserRepository u,FarmerRepository f,MilkCollectionRepository c,PaymentRepository p){
        users=u;farmers=f;collections=c;payments=p;
    }

    public Map<String,Object> adminStats(){
        List<MilkCollection> all=collections.findAll();
        LocalDate today=LocalDate.now();
        BigDecimal milk=all.stream().map(MilkCollection::getLitres).reduce(BigDecimal.ZERO,BigDecimal::add);
        BigDecimal todayMilk=all.stream().filter(c->today.equals(c.getCollectionDate())).map(MilkCollection::getLitres).reduce(BigDecimal.ZERO,BigDecimal::add);
        BigDecimal todayAmount=all.stream().filter(c->today.equals(c.getCollectionDate())).map(MilkCollection::getAmount).reduce(BigDecimal.ZERO,BigDecimal::add);
        BigDecimal paid=payments.findAll().stream().map(p->p.getAmount()).reduce(BigDecimal.ZERO,BigDecimal::add);
        return Map.of("users",users.count(),"farmers",farmers.count(),"milk",milk,"todayMilk",todayMilk,"todayAmount",todayAmount,"payments",paid);
    }

    public Map<String,Object> userStats(Long id){
        List<MilkCollection> all=collections.findByFarmerOwnerUserIdOrderByCollectionDateDescCollectionTimeDesc(id);
        LocalDate today=LocalDate.now();
        BigDecimal milk=all.stream().map(MilkCollection::getLitres).reduce(BigDecimal.ZERO,BigDecimal::add);
        BigDecimal todayMilk=all.stream().filter(c->today.equals(c.getCollectionDate())).map(MilkCollection::getLitres).reduce(BigDecimal.ZERO,BigDecimal::add);
        BigDecimal todayAmount=all.stream().filter(c->today.equals(c.getCollectionDate())).map(MilkCollection::getAmount).reduce(BigDecimal.ZERO,BigDecimal::add);
        return Map.of("farmers",farmers.countByOwnerUserId(id),"milk",milk,"todayMilk",todayMilk,"todayAmount",todayAmount);
    }
}

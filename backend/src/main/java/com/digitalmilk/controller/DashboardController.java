package com.digitalmilk.controller;

import com.digitalmilk.security.CurrentUser;
import com.digitalmilk.service.DashboardService;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {
    private final DashboardService service;
    public DashboardController(DashboardService s){service=s;}

    @GetMapping("/stats")
    public Map<String,Object> admin(){
        if(!"ADMIN".equals(CurrentUser.role()))
            throw new ResponseStatusException(HttpStatus.FORBIDDEN,"Admin access required");
        return service.adminStats();
    }

    @GetMapping("/my-stats")
    public Map<String,Object> user(){return service.userStats(CurrentUser.id());}

    @GetMapping("/farmer-stats")
    public Map<String,Object> farmer(){
        if(!"FARMER".equals(CurrentUser.role()))
            throw new ResponseStatusException(HttpStatus.FORBIDDEN,"Farmer access required");
        return Map.of("milk",0,"todayMilk",0,"amount",0);
    }
}

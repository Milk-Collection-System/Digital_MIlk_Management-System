package com.digitalmilk.controller;

import com.digitalmilk.dto.FarmerRequest;
import com.digitalmilk.model.Farmer;
import com.digitalmilk.security.CurrentUser;
import com.digitalmilk.service.FarmerService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/farmers")
public class FarmerController {
    private final FarmerService service;
    public FarmerController(FarmerService s){service=s;}

    @GetMapping public List<Farmer> list(){return service.list(CurrentUser.id(),CurrentUser.role());}
    @GetMapping("/{id}") public Farmer get(@PathVariable Long id){return service.getOwned(id,CurrentUser.id(),CurrentUser.role());}
    @PostMapping public Farmer create(@Valid @RequestBody FarmerRequest r){return service.create(r,CurrentUser.id());}
    @PutMapping("/{id}") public Farmer update(@PathVariable Long id,@Valid @RequestBody FarmerRequest r){return service.update(id,r,CurrentUser.id(),CurrentUser.role());}
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id){service.delete(id,CurrentUser.id(),CurrentUser.role());}
}

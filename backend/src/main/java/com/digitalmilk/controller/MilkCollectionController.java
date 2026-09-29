package com.digitalmilk.controller;

import com.digitalmilk.dto.MilkCollectionRequest;
import com.digitalmilk.model.MilkCollection;
import com.digitalmilk.security.CurrentUser;
import com.digitalmilk.service.MilkCollectionService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/milk-collections")
public class MilkCollectionController {
    private final MilkCollectionService service;
    public MilkCollectionController(MilkCollectionService s){service=s;}

    @GetMapping public List<MilkCollection> list(){return service.list(CurrentUser.id(),CurrentUser.role());}
    @GetMapping("/{id}") public MilkCollection get(@PathVariable Long id){return service.get(id,CurrentUser.id(),CurrentUser.role());}
    @PostMapping public MilkCollection create(@Valid @RequestBody MilkCollectionRequest r){return service.create(r,CurrentUser.id(),CurrentUser.role());}
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id){service.delete(id,CurrentUser.id(),CurrentUser.role());}
}

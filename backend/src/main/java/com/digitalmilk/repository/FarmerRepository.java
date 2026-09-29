package com.digitalmilk.repository;

import com.digitalmilk.model.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FarmerRepository extends JpaRepository<Farmer,Long> {
    List<Farmer> findByOwnerUserIdOrderByIdDesc(Long ownerUserId);
    long countByOwnerUserId(Long ownerUserId);
}

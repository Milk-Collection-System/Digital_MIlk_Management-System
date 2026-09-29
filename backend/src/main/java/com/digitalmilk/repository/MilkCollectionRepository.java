package com.digitalmilk.repository;

import com.digitalmilk.model.MilkCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MilkCollectionRepository extends JpaRepository<MilkCollection,Long> {
    List<MilkCollection> findByFarmerOwnerUserIdOrderByCollectionDateDescCollectionTimeDesc(Long userId);
    List<MilkCollection> findByFarmerIdOrderByCollectionDateDescCollectionTimeDesc(Long farmerId);
    List<MilkCollection> findAllByOrderByCollectionDateDescCollectionTimeDesc();
}

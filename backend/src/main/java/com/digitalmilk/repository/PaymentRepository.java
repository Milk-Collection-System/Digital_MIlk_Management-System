package com.digitalmilk.repository;

import com.digitalmilk.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment,Long> {
    List<Payment> findByFarmerOwnerUserIdOrderByPaymentDateDesc(Long userId);
    List<Payment> findAllByOrderByPaymentDateDesc();
}

package com.digitalmilk.controller;

import com.digitalmilk.model.Payment;
import com.digitalmilk.repository.PaymentRepository;
import com.digitalmilk.security.CurrentUser;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    private final PaymentRepository payments;
    public PaymentController(PaymentRepository p){payments=p;}

    @GetMapping
    public List<Payment> list(){
        return "ADMIN".equals(CurrentUser.role())
                ? payments.findAllByOrderByPaymentDateDesc()
                : payments.findByFarmerOwnerUserIdOrderByPaymentDateDesc(CurrentUser.id());
    }
}

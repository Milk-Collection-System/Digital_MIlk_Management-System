package com.digitalmilk.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="payments")
public class Payment {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY, optional=false)
    @JoinColumn(name="farmer_id", nullable=false)
    private Farmer farmer;

    @Column(nullable=false) private LocalDate paymentDate;
    @Column(nullable=false, precision=14, scale=2) private BigDecimal amount;
    private String receiptNumber;

    public Long getId(){return id;}
    public Farmer getFarmer(){return farmer;}
    public LocalDate getPaymentDate(){return paymentDate;}
    public BigDecimal getAmount(){return amount;}
    public String getReceiptNumber(){return receiptNumber;}

    public void setId(Long v){id=v;}
    public void setFarmer(Farmer v){farmer=v;}
    public void setPaymentDate(LocalDate v){paymentDate=v;}
    public void setAmount(BigDecimal v){amount=v;}
    public void setReceiptNumber(String v){receiptNumber=v;}
}

package com.digitalmilk.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="milk_collections")
public class MilkCollection {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY, optional=false)
    @JoinColumn(name="farmer_id", nullable=false)
    private Farmer farmer;

    @Column(nullable=false) private LocalDate collectionDate;
    private LocalTime collectionTime;
    @Column(nullable=false) private String milkType;
    @Column(nullable=false, precision=12, scale=2) private BigDecimal litres;
    @Column(precision=6, scale=2) private BigDecimal fat;
    @Column(precision=6, scale=2) private BigDecimal snf;
    @Column(precision=6, scale=2) private BigDecimal lct;
    @Column(nullable=false, precision=12, scale=2) private BigDecimal rate;
    @Column(nullable=false, precision=14, scale=2) private BigDecimal amount;

    public Long getId(){return id;}
    public Farmer getFarmer(){return farmer;}
    public LocalDate getCollectionDate(){return collectionDate;}
    public LocalTime getCollectionTime(){return collectionTime;}
    public String getMilkType(){return milkType;}
    public BigDecimal getLitres(){return litres;}
    public BigDecimal getFat(){return fat;}
    public BigDecimal getSnf(){return snf;}
    public BigDecimal getLct(){return lct;}
    public BigDecimal getRate(){return rate;}
    public BigDecimal getAmount(){return amount;}

    public void setId(Long v){id=v;}
    public void setFarmer(Farmer v){farmer=v;}
    public void setCollectionDate(LocalDate v){collectionDate=v;}
    public void setCollectionTime(LocalTime v){collectionTime=v;}
    public void setMilkType(String v){milkType=v;}
    public void setLitres(BigDecimal v){litres=v;}
    public void setFat(BigDecimal v){fat=v;}
    public void setSnf(BigDecimal v){snf=v;}
    public void setLct(BigDecimal v){lct=v;}
    public void setRate(BigDecimal v){rate=v;}
    public void setAmount(BigDecimal v){amount=v;}
}

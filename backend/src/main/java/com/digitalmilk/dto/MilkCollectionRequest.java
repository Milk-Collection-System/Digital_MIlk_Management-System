package com.digitalmilk.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.time.*;

public class MilkCollectionRequest {
    @NotNull private Long farmerId;
    @NotNull private LocalDate collectionDate;
    private LocalTime collectionTime;
    @NotBlank private String milkType;
    @NotNull private BigDecimal litres;
    private BigDecimal fat;
    private BigDecimal snf;
    private BigDecimal lct;
    @NotNull private BigDecimal rate;

    public Long getFarmerId(){return farmerId;} public LocalDate getCollectionDate(){return collectionDate;}
    public LocalTime getCollectionTime(){return collectionTime;} public String getMilkType(){return milkType;}
    public BigDecimal getLitres(){return litres;} public BigDecimal getFat(){return fat;}
    public BigDecimal getSnf(){return snf;} public BigDecimal getLct(){return lct;} public BigDecimal getRate(){return rate;}
    public void setFarmerId(Long v){farmerId=v;} public void setCollectionDate(LocalDate v){collectionDate=v;}
    public void setCollectionTime(LocalTime v){collectionTime=v;} public void setMilkType(String v){milkType=v;}
    public void setLitres(BigDecimal v){litres=v;} public void setFat(BigDecimal v){fat=v;}
    public void setSnf(BigDecimal v){snf=v;} public void setLct(BigDecimal v){lct=v;} public void setRate(BigDecimal v){rate=v;}
}

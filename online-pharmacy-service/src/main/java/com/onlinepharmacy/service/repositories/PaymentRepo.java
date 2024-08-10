package com.onlinepharmacy.service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onlinepharmacy.service.entities.Payment;
@Repository
public interface PaymentRepo extends JpaRepository<Payment, Long> {

}

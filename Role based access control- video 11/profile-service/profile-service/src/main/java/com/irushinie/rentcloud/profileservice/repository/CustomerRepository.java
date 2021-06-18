package com.irushinie.rentcloud.profileservice.repository;

import com.irushinie.rentcloud.commons.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}

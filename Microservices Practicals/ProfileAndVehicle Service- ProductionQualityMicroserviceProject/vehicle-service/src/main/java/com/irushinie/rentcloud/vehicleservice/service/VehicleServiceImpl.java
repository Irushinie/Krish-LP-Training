package com.irushinie.rentcloud.vehicleservice.service;

import com.irushinie.rentcloud.commons.model.Customer;
import com.irushinie.rentcloud.commons.model.Vehicle;
import com.irushinie.rentcloud.vehicleservice.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleServiceImpl implements VehicleService{

    @Autowired
    VehicleRepository vehicleRepository;

    @Override
    public Vehicle save(Vehicle vehicle){
        return vehicleRepository.save(vehicle);
    }
}

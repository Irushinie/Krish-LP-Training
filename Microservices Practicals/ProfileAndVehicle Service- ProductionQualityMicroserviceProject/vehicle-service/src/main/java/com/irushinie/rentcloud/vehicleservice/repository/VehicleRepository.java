package com.irushinie.rentcloud.vehicleservice.repository;

import com.irushinie.rentcloud.commons.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
}

package com.example.api.Repository;

import com.example.api.Entity.CityMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepo extends JpaRepository<CityMaster,Integer> {

    boolean existsByCityname(String cityname);
}

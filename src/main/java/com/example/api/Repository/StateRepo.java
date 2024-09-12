package com.example.api.Repository;

import com.example.api.Entity.StateMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StateRepo extends JpaRepository<StateMaster,Integer> {

    boolean existsByStatename(String statename);
}

package com.example.api.Repository;

import com.example.api.Entity.UserMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepo extends JpaRepository<UserMaster,Integer> {

    @Query(value="select * from user_master where address LIKE %:datavalue%",nativeQuery = true)
    List<UserMaster>getUserInfo(@Param("datavalue") String datavalue);
}

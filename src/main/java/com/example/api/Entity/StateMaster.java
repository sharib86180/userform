package com.example.api.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StateMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int stateid;
    public String statename;

    @OneToMany(mappedBy = "statemaster")
    @JsonIgnore
    private List<CityMaster> citymaster;

}

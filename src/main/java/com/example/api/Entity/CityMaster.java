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
public class CityMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int cityid;
    public String cityname;

    @ManyToOne
    @JoinColumn(name="stateid")
    private StateMaster statemaster;

    @OneToMany(mappedBy = "citymaster")
    @JsonIgnore
    private List<UserMaster> usermaster;
}

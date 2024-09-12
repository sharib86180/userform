package com.example.api.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserMaster {

    @Id
    public int userid;
    public String username;
    public String mobileno;
    public String address;

    @ManyToOne
    @JoinColumn(name="cityid")
    private CityMaster citymaster;
}

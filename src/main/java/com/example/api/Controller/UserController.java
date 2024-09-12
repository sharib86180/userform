package com.example.api.Controller;

import com.example.api.Entity.UserMaster;
import com.example.api.Repository.CityRepo;
import com.example.api.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private CityRepo cityrepo;

    @Autowired
    private UserRepo userrepo;

    @PostMapping("/AddUser/{id}")
    public ResponseEntity<?>AddUser(@RequestBody UserMaster obj,@PathVariable Integer id)
    {
        Random rnd=new Random();
        int UserId=rnd.nextInt(100000,999999);
        obj.setUserid(UserId);
        var cityid=cityrepo.findById(id).orElseThrow(()->new RuntimeException("City Id Not Found"));
        obj.setCitymaster(cityid);
        userrepo.save(obj);
        return new ResponseEntity<>("User Added Successfully", HttpStatus.OK);
    }
    @GetMapping("/GetUser")
    public ResponseEntity<?>GetUser()
    {
        var userlst=userrepo.findAll();
        return new ResponseEntity<>(userlst,HttpStatus.OK);
    }

    @GetMapping("/GetUserInfo/{dataval}")
    public ResponseEntity<?>GetUserInfo(@PathVariable String dataval)
    {
        var userlst=userrepo.getUserInfo(dataval);
        return new ResponseEntity<>(userlst,HttpStatus.OK);
    }
}

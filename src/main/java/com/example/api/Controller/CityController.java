package com.example.api.Controller;

import com.example.api.Entity.CityMaster;
import com.example.api.Repository.CityRepo;
import com.example.api.Repository.StateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CityController {

    @Autowired
    private CityRepo cityrepo;

    @Autowired
    private StateRepo staterepo;

    @PostMapping("/AddCity/{id}")
    public ResponseEntity<?>AddCity(@RequestBody CityMaster obj, @PathVariable Integer id)
    {
        var statelst=staterepo.findById(id).orElseThrow(()->new RuntimeException("State Id Not Found"));
        obj.setStatemaster(statelst);
        {
            if(cityrepo.existsByCityname(obj.getCityname()))
            {
                return  new ResponseEntity<>("City Name Added Already",HttpStatus.ALREADY_REPORTED);
            }
            else {
                cityrepo.save(obj);
                return new ResponseEntity<>("City Name Added Successfully", HttpStatus.OK);
            }
        }
    }

    @GetMapping("/GetCity")
    public ResponseEntity<?>GetCity()
    {
        var citylst=cityrepo.findAll();
        return new ResponseEntity<>(citylst,HttpStatus.OK);
    }
}

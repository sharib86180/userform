package com.example.api.Controller;

import com.example.api.Entity.StateMaster;
import com.example.api.Repository.StateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class StateController {

    @Autowired
    private StateRepo staterepo;

    @PostMapping("/AddState")
    public ResponseEntity<?>AddState(@RequestBody StateMaster obj)
    {
        if(staterepo.existsByStatename(obj.getStatename()))
        {
            return  new ResponseEntity<>("State Name Added Already",HttpStatus.ALREADY_REPORTED);
        }
        else {
            staterepo.save(obj);
            return new ResponseEntity<>("State Name Added Successfully", HttpStatus.OK);
        }
    }

    @GetMapping("/GetState")
    public ResponseEntity<?>GetState()
    {
        var statelst=staterepo.findAll();
        return new ResponseEntity<>(statelst,HttpStatus.OK);
    }
}

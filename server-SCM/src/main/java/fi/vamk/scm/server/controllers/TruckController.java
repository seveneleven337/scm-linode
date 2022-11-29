package fi.vamk.scm.server.controllers;

import fi.vamk.scm.server.entities.Truck;
import fi.vamk.scm.server.repositories.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/truck")
@CrossOrigin(origins = "http://localhost:3000")
public class TruckController {
    @Autowired
    private TruckRepository truckRepository;

    @GetMapping
    public List<Truck> readAll(){
        return truckRepository.findAll();
    }
}

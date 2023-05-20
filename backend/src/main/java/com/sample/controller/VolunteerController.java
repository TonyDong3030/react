package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.model.Volunteer;
import com.sample.service.VolunteerService;

@RestController
@RequestMapping("/api")
public class VolunteerController {
	
	@Autowired
	private VolunteerService service;
	
	@GetMapping("/volunteer")
	public List<Volunteer> get() {
		return service.get();
	}
	
	@PostMapping("/volunteer")
	public Volunteer save(@RequestBody Volunteer item) {
		service.save(item);
		return item;
	}
	
	@GetMapping("/volunteer/{id}")
	public Volunteer get(@PathVariable int id) {
		return service.get(id);
	}
	
	@DeleteMapping("/volunteer/{id}")
	public String delete(@PathVariable int id) { 
		service.delete(id); 
		return "Volunteer erased by id "+id; 
	}
	
	@PutMapping("/volunteer")
	public Volunteer update(@RequestBody Volunteer item) {
		service.save(item);
		return item;
	}

} 

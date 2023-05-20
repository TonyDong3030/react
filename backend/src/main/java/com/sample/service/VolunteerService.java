package com.sample.service;

import java.util.List;

import com.sample.model.Volunteer;

public interface VolunteerService {
	

	List<Volunteer> get();
	
	Volunteer get(int id);
	
	void save(Volunteer item);
	
	void delete(int id);
	

}

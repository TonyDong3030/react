package com.sample.dao;

import java.util.List;

import com.sample.model.Volunteer;

public interface VolunteerDAO {
	
	List<Volunteer> get();
	
	Volunteer get(int id);
	
	void save(Volunteer item);
	
	void delete(int id);
	

}

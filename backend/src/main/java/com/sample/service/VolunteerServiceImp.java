package com.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sample.dao.VolunteerDAO;
import com.sample.model.Volunteer;

@Service
public class VolunteerServiceImp implements VolunteerService {
	
	@Autowired
	private VolunteerDAO dao;

	@Transactional
	@Override
	public List<Volunteer> get() {
		return dao.get();
	}

	@Transactional
	@Override
	public Volunteer get(int id) {
		return dao.get(id);
	}

	@Transactional
	@Override
	public void save(Volunteer item) {
		dao.save(item);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		dao.delete(id);
		
	}

}

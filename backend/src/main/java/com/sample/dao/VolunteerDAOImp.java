package com.sample.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sample.model.Volunteer;

@Repository
public class VolunteerDAOImp implements VolunteerDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Volunteer> get() {

		Session currSession = entityManager.unwrap(Session.class);
		Query<Volunteer> query = currSession.createQuery("from Volunteer", Volunteer.class);
		List<Volunteer> list = query.getResultList();
		return list;

	}

	@Override
	public Volunteer get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Volunteer emp = currSession.get(Volunteer.class, id);
		return emp;
	}

	@Override
	public void save(Volunteer item) {
		
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(item);

	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Volunteer emp = currSession.get(Volunteer.class, id);
		currSession.delete(emp);

	}

}

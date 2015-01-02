package com.airsystem.sample.cms.service;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.airsystem.sample.cms.domain.Employee;
import com.airsystem.sample.cms.utils.Constraint;
import com.airsystem.sample.cms.utils.SearchResult;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Service(value = "iDatabaseService")
@Transactional
public class DatabaseService implements IDatabaseService {
	protected final Logger LOG = Logger.getLogger(DatabaseService.class.getSimpleName());

	@Autowired
	protected SessionFactory sessionFactory;

	@Autowired
	private BaseService baseService;

	@Override
	public List findUser(Map<String, Object> parameters) {
		return baseService.runHQL("from UserApp where username = :username", parameters);
	}

	@Override
	public List findAllEmployee() {
		return sessionFactory.getCurrentSession().createQuery("from Employee").list();
	}

	@Override
	public SearchResult searchEmployee(Constraint constraint, boolean isUsingPaging, int offset, int pageSize) {
		return baseService.searchHQL("employee", "Employee employee", constraint, isUsingPaging, offset, pageSize);
	}

	@Override
	public void saveorUpdateEmployee(Employee employee) {
		sessionFactory.getCurrentSession().saveOrUpdate(employee);
	}

	@Override
	public void deleteEmployee(Employee employee) {
		sessionFactory.getCurrentSession().delete(employee);
	}
}
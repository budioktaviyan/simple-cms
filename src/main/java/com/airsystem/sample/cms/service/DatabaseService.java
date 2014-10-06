package com.airsystem.sample.cms.service;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
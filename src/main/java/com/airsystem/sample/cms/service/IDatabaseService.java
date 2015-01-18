package com.airsystem.sample.cms.service;

import java.util.List;
import java.util.Map;

import com.airsystem.sample.cms.domain.Employee;
import com.airsystem.sample.cms.domain.UserApp;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public interface IDatabaseService {
	public List findUser(Map<String, Object> parameters);

	public List findAllUser(Map<String, Object> parameters);

	public void saveorUpdateUser(UserApp user);

	public void deleteUser(UserApp user);

	public List findAllEmployee();

	public void saveorUpdateEmployee(Employee employee);

	public void deleteEmployee(Employee employee);
}
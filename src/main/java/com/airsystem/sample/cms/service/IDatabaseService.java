package com.airsystem.sample.cms.service;

import java.util.List;
import java.util.Map;

import com.airsystem.sample.cms.domain.Employee;
import com.airsystem.sample.cms.domain.Roles;
import com.airsystem.sample.cms.domain.Users;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public interface IDatabaseService {
	public List findUsers(Map<String, Object> parameters);

	public List findAllUsers(Map<String, Object> parameters);

	public void saveorUpdateUsers(Users users);

	public void saveorUpdateRoles(Roles roles);

	public void deleteUsers(Users users);

	public List findAllEmployee();

	public void saveorUpdateEmployee(Employee employee);

	public void deleteEmployee(Employee employee);
}
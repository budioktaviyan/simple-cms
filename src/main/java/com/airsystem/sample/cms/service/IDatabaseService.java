package com.airsystem.sample.cms.service;

import java.util.List;
import java.util.Map;

import com.airsystem.sample.cms.domain.Employee;
import com.airsystem.sample.cms.utils.Constraint;
import com.airsystem.sample.cms.utils.SearchResult;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public interface IDatabaseService {
	public List findUser(Map<String, Object> parameters);

	public List findAllEmployee();

	public Employee findByEmployeeId(String employeeId);

	public SearchResult searchEmployee(Constraint constraint, boolean isUsingPaging, int offset, int pageSize);

	public void saveorUpdateEmployee(Employee employee);

	public void deleteEmployee(Employee employee);
}
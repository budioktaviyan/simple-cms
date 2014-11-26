package com.airsystem.sample.cms.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.airsystem.sample.cms.domain.Employee;
import com.airsystem.sample.cms.service.IDatabaseService;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Controller
public class EmployeeController {
	private static final Logger LOG = Logger.getLogger(EmployeeController.class.getSimpleName());

	private static final String RESPONSE = "response";
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private IDatabaseService databaseService;

	@RequestMapping(value = "/master/employee/saveorupdate", method = RequestMethod.POST)
	public @ResponseBody Map<String, String> saveorupdate(@RequestBody Employee employee) {
		Map<String, String> response = new HashMap<String, String>();
		try {
			databaseService.saveorUpdateEmployee(employee);
			response.put(RESPONSE, SUCCESS);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			response.put(RESPONSE, FAIL);
		}

		return response;
	}
}
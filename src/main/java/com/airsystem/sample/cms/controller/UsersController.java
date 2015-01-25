package com.airsystem.sample.cms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.airsystem.sample.cms.domain.Users;
import com.airsystem.sample.cms.service.IDatabaseService;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Controller
@RequestMapping("/master/users*")
public class UsersController {
	private static final Logger LOG = Logger.getLogger(UsersController.class.getSimpleName());

	private static final String ROLE = "role";
	private static final String ADMIN = "ADMIN";
	private static final String RESPONSE = "response";
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private IDatabaseService databaseService;

	@RequestMapping(value = "/search", method = RequestMethod.GET)
	@ResponseBody
	public List<Users> search() {
		Map parameters = new HashMap();
		parameters.put(ROLE, ADMIN);
		return databaseService.findAllUsers(parameters);
	}

	@RequestMapping(value = "/saveorupdate", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> saveorupdate(@RequestBody Users users) {
		Map<String, String> jsonObject = new HashMap<String, String>();
		try {
			databaseService.saveorUpdateUsers(users);
			jsonObject.put(RESPONSE, SUCCESS);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			jsonObject.put(RESPONSE, FAIL);
		}

		return jsonObject;
	}

	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> delete(@RequestBody Users users) {
		Map<String, String> jsonObject = new HashMap<String, String>();
		try {
			databaseService.deleteUsers(users);
			jsonObject.put(RESPONSE, SUCCESS);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			jsonObject.put(RESPONSE, FAIL);
		}

		return jsonObject;
	}
}
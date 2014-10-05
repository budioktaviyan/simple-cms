package com.airsystem.sample.cms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Controller
public class UserController {
	private static final String URI_LOGIN = "login";

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return URI_LOGIN;
	}
}
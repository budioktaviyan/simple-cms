package com.airsystem.sample.cms.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.airsystem.sample.cms.domain.Users;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Controller
public class UserAppController {
	private static final Logger LOG = Logger.getLogger(UserAppController.class.getSimpleName());

	private static final String URI_LOGIN = "login";
	private static final String URI_EMPLOYEE = "master/employee";
	private static final String URI_REDIRECT_LOGIN = "redirect:/login";
	private static final String URI_REDIRECT_EMPLOYEE = "redirect:/master/employee";

	@Resource(name = "authenticationManager")
	private AuthenticationManager authenticationManager;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String open() {
		return URI_REDIRECT_EMPLOYEE;
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String openLogin(ModelMap modelMap) {
		modelMap.put("authentication", true);
		return URI_LOGIN;
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String submitLogin(ModelMap modelMap, @ModelAttribute Users userApp) {
		Authentication userAuthentication = new UsernamePasswordAuthenticationToken(userApp.getUsername(), userApp.getPassword());

		try {
			Authentication authentication = authenticationManager.authenticate(userAuthentication);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			return URI_REDIRECT_EMPLOYEE;
		} catch (AuthenticationException e) {
			LOG.error(e.getMessage(), e);
			modelMap.put("authentication", false);
			return URI_LOGIN;
		}
	}

	@RequestMapping(value = "/master/employee", method = RequestMethod.GET)
	public String openEmployee() {
		return URI_EMPLOYEE;
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String submitLogout(HttpSession httpSession) {
		httpSession.invalidate();
		return URI_REDIRECT_LOGIN;
	}
}
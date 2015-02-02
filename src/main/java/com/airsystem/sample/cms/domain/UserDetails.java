package com.airsystem.sample.cms.domain;

import java.util.List;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public class UserDetails {
	private List<Users> users;
	private List<Roles> roles;

	public List<Users> getUsers() {
		return users;
	}

	public void setUsers(List<Users> pUsers) {
		users = pUsers;
	}

	public List<Roles> getRoles() {
		return roles;
	}

	public void setRoles(List<Roles> pRoles) {
		roles = pRoles;
	}
}
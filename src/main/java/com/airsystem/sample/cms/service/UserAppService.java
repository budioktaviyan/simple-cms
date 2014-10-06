package com.airsystem.sample.cms.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.airsystem.sample.cms.domain.UserApp;
import com.airsystem.sample.cms.utils.Constant;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Service(value = "userDetailsService")
public class UserAppService implements UserDetailsService {
	@Autowired
	private IDatabaseService databaseService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Map parameters = new HashMap();
		parameters.put("username", username);

		List users = databaseService.findUser(parameters);
		if (users.size() == 0) {
			throw new UsernameNotFoundException("User Not Found!");
		}

		UserApp userEntity = (UserApp) users.get(0);
		boolean enabled = Constant.IS_ENABLED;
		boolean accountNonExpired = Constant.ACC_NOT_EXPIRED;
		boolean credentialsNonExpired = Constant.CREDENTIAL_NOT_EXPIRED;
		boolean accountNonLocked = Constant.ACC_NOT_LOCKED;

		Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));

		User user = new User(username, userEntity.getPassword(), enabled,
							 accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
		return user;
	}
}
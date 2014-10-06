package com.airsystem.sample.cms.service;

import java.util.List;
import java.util.Map;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public interface IDatabaseService {
	public List findUser(Map<String, Object> parameters);
}
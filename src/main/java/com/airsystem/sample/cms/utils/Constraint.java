package com.airsystem.sample.cms.utils;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public class Constraint {
	private String mWhereClause;

	private Map<String, Object> mParameters;

	public Constraint() {
		mParameters = new HashMap<String, Object>();
	}

	public String getWhereClause() {
		return mWhereClause;
	}

	public void setWhereClause(String whereClause) {
		mWhereClause = whereClause;
	}

	public Map<String, Object> getParameters() {
		return mParameters;
	}

	public void setParameters(Map<String, Object> parameters) {
		mParameters = parameters;
	}
}
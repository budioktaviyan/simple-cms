package com.airsystem.sample.cms.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airsystem.sample.cms.utils.Constant;
import com.airsystem.sample.cms.utils.Constraint;
import com.airsystem.sample.cms.utils.PagingInfo;
import com.airsystem.sample.cms.utils.SearchResult;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Service(value = "baseService")
public class BaseService {
	protected final Logger LOG = Logger.getLogger(BaseService.class.getSimpleName());

	private static final String SELECT = "select";
	private static final String FROM = "from";
	private static final String WHERE = "where";
	private static final String COUNT = "count(*)";

	@Autowired
	protected SessionFactory sessionFactory;

	public List runHQL(String hql, Map<String, Object> parameters) {
		Query query = sessionFactory.getCurrentSession().createQuery(hql);

		if (parameters != null) {
			for (String key : parameters.keySet()) {
				query.setParameter(key, parameters.get(key));
			}
		}
		return query.list();
	}

	public int executeUpdateHQL(String hql, Map<String, Object> parameters) {
		Query query = sessionFactory.getCurrentSession().createQuery(hql);

		if (parameters != null) {
			for (String key : parameters.keySet()) {
				query.setParameter(key, parameters.get(key));
			}
		}
		return query.executeUpdate();
	}

	public SearchResult searchHQL(String selectClause, String fromClause, Constraint constraint, 
								  boolean isUsingPaging, int offset, int pageSize, boolean isCacheQuery) {
		StringBuilder queryBuilder = new StringBuilder();
		queryBuilder.append(SELECT).append(" ").append(selectClause);
		queryBuilder.append(" ").append(FROM).append(" ").append(fromClause);

		Map<String, Object> parameters = null;
		if (constraint != null) {
			if (StringUtils.isNotBlank(constraint.getWhereClause())) {
				queryBuilder.append(" ").append(WHERE).append(" ").append(constraint.getWhereClause());
			}
			parameters = constraint.getParameters();
		}

		Query query = sessionFactory.getCurrentSession().createQuery(queryBuilder.toString());
		if (parameters != null) {
			for (String key : parameters.keySet()) {
				query.setParameter(key, parameters.get(key));
			}
		}

		PagingInfo pagingInfo = null;
		if (isUsingPaging) {
			StringBuilder pagingBuilder = new StringBuilder();
			pagingBuilder.append(SELECT).append(" ").append(COUNT).append(" ");
			pagingBuilder.append(FROM).append(" ").append(fromClause);

			if (constraint != null) {
				if (StringUtils.isNotBlank(constraint.getWhereClause())) {
					pagingBuilder = pagingBuilder.append(" ").append(WHERE).append(" ").append(constraint.getWhereClause());
				}
			}

			Query queryPaging = sessionFactory.getCurrentSession().createQuery(pagingBuilder.toString());
			if (parameters != null) {
				for (String key : parameters.keySet()) {
					queryPaging.setParameter(key, parameters.get(key));
				}
			}

			int totalRows = ((Long) queryPaging.uniqueResult()).intValue();
			if (offset < 0 || offset >= totalRows) {
				offset = 0;
			}

			if (pageSize <= 0) {
				pageSize = Constant.DEFAULT_PAGE_SIZE;
			}

			query.setFirstResult(offset).setMaxResults(pageSize);
			pagingInfo = new PagingInfo(offset, pageSize, totalRows);
		}

		List records = query.setCacheable(isCacheQuery).list();
		return new SearchResult(records, pagingInfo);
	}

	public SearchResult searchHQL(String selectClause, String fromClause, Constraint constraint,
								  boolean isUsingPaging, int offset, int pageSize) {
		return searchHQL(selectClause, fromClause, constraint, isUsingPaging, offset, pageSize, false);
	}
}
package com.airsystem.sample.cms.utils;

import java.util.List;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public class SearchResult {
	private List mRecords;

	private PagingInfo mPagingInfo;

	public SearchResult() {
	}

	public SearchResult(List recs, PagingInfo pagingInfo) {
		mRecords = recs;
		mPagingInfo = pagingInfo;
	}

	public List getRecs() {
		return mRecords;
	}

	public void setRecs(List recs) {
		mRecords = recs;
	}

	public PagingInfo getPagingInfo() {
		return mPagingInfo;
	}

	public void setPagingInfo(PagingInfo pagingInfo) {
		mPagingInfo = pagingInfo;
	}
}
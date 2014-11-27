package com.airsystem.sample.cms.utils;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public class PagingInfo {
	private int mOffset;
	private int mPageSize;
	private int mTotalRows;

	public PagingInfo(int offset, int pageSize, int totalRows) {
		mOffset = offset;
		mPageSize = pageSize;
		mTotalRows = totalRows;
	}

	public int getOffset() {
		return mOffset;
	}

	public void setOffset(int offset) {
		mOffset = offset;
	}

	public int getPageSize() {
		return mPageSize;
	}

	public void setPageSize(int pageSize) {
		mPageSize = pageSize;
	}

	public int getTotalRows() {
		return mTotalRows;
	}

	public void setTotalRows(int totalRows) {
		mTotalRows = totalRows;
	}
}
package com.airsystem.sample.cms.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */
public class DateUtil {
	private static final String DATE_FORMAT = "dd MMMM yyyy";

	private static final Locale DATE_LOCALE = new Locale("id");

	public static String convertDateToString(Date date) {
		return convertDateToString(date, DATE_FORMAT, DATE_LOCALE);
	}

	public static String convertDateToString(Date date, String format, Locale locale) {
		DateFormat dateFormat = new SimpleDateFormat(format, locale);
		return (date == null) ? "" : dateFormat.format(date);
	}
}
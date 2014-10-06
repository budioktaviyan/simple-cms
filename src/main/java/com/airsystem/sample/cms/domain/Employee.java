package com.airsystem.sample.cms.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * @author Budi Oktaviyan Suryanto (budi.oktaviyan@icloud.com)
 */

@Entity
@Table(name = "tbl_employee")
public class Employee {
	@Id
	private int mId;

	@Column(name = "name")
	private String mName;

	@Column(name = "gender")
	private String mGender;

	@Column(name = "phone")
	private String mPhone;

	@Column(name = "email")
	private String mEmail;

	@Temporal(TemporalType.DATE)
	@Column(name = "birthdate")
	private Date mBirthdate;

	public int getId() {
		return mId;
	}

	public void setId(int id) {
		mId = id;
	}

	public String getName() {
		return mName;
	}

	public void setName(String name) {
		mName = name;
	}

	public String getGender() {
		return mGender;
	}

	public void setGender(String gender) {
		mGender = gender;
	}

	public String getPhone() {
		return mPhone;
	}

	public void setPhone(String phone) {
		mPhone = phone;
	}

	public String getEmail() {
		return mEmail;
	}

	public void setEmail(String email) {
		mEmail = email;
	}

	public Date getBirthdate() {
		return mBirthdate;
	}

	public void setBirthdate(Date birthdate) {
		mBirthdate = birthdate;
	}
}
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>Employee Data</title>
<link href="<c:url value="/res/css/master.css"/>" rel="stylesheet" type="text/css" />
</head>
<body>
	<div id="wrapper">
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand"><a>Simple CMS</a></li>
				<li class="sidebar"><a>Employee</a></li>
				<hr class="sidebar-hr" />
				<li><a href="#logout">Logout</a></li>
			</ul>
		</div>
		<div id="page-content-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<a href="#menu-toggle" id="menu-toggle" class="btn btn-info btn-lg">
							<span>Menu</span>
							<i class="glyphicon glyphicon-th-list"></i>
						</a>
						<h1>Employee Management</h1>
						<hr />
					</div>
					<div class="col-lg-6">
						<div class="form-group">
							<label>Name</label>
							<input class="form-control" placeholder="Input name" />
							<br />

							<label>Gender</label>
							<select class="form-control">
								<option>Male</option>
								<option>Female</option>
							</select>
							<br />

							<label>Phone Number</label>
							<input class="form-control" placeholder="Input phone number" />
							<br />

							<label>Email</label>
							<input class="form-control" placeholder="Input email address" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="<c:url value="/res/js/master.js"/>"></script>
</body>
</html>
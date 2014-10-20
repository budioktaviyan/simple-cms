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
				<li class="sidebar-brand"><a href="#">User</a></li>
				<li class="sidebar-brand"><a>Employee</a></li>
				<hr class="sidebar-hr" />
				<li>
					<a method="get" href="<c:url value="/logout"/>">Logout</a>
				</li>
			</ul>
		</div>
		<div id="page-content-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<a href="#menu-toggle" class="btn btn-info btn-block" id="menu-toggle">Menu</a>
						<hr />
						<h1>Employee Management</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="<c:url value="/res/js/master.js"/>"></script>
</body>
</html>
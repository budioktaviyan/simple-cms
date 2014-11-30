<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="url_path" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
<title>Employee Data</title>
<link href="<c:url value="/res/css/plugins/bootstrap-datepicker.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/plugins/sweet-alert.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/master.css"/>" rel="stylesheet" type="text/css" />
</head>
<body>
	<div id="wrapper">
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand"><a>Simple CMS</a></li>
				<li class="sidebar"><a>Employee</a></li>
				<hr class="sidebar-hr" />
				<li><a href="<c:url value="/logout"/>">Logout</a></li>
			</ul>
		</div>
		<nav class="navbar navbar-inverse navbar-static-top" role="navigation">
			<a href="#menu-toggle" id="menu-toggle" class="btn btn-inverse btn-lg">
				<i class="glyphicon glyphicon-th-list white"></i>
			</a>
		</nav>
		<div id="page-content-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 form-header-margin-top">
						<h1>Employee Management</h1>
						<hr />
					</div>
					<div class="col-lg-6">
						<form class="form-group" method="post" action="<c:url value="/master/employee/saveorupdate"/>">
							<label>Name</label>
							<div class="input-group form-margin-bottom">
								<input id="name" class="form-control" placeholder="Input name" />
								<a href="#modal-toggle" id="modal-toggle" class="input-group-addon" onfocus="this.blur()"
								   data-toggle="modal" data-target="#search-modal" data-backdrop="false">
								   <i class="glyphicon glyphicon-search"></i>
								</a>

								<div id="search-modal" class="modal" role="dialog" tabindex="-1">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<a class="close" role="button" data-dismiss="modal">&times;</a>
												<h3 class="modal-title align-justify">Employee Data</h3>
											</div>
											<div id="employee-data" class="modal-body"></div>
											<div class="modal-footer">
												<a class="btn btn-primary" role="button" data-dismiss="modal">Close</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<label>Gender</label>
							<select id="gender" class="form-control form-margin-bottom">
								<option>Male</option>
								<option>Female</option>
							</select>

							<label>Birthdate</label>
                            <div id="birthdate-toggle" class="input-group date form-margin-bottom">
                                <div class="input-group-addon">
                                   <i class="glyphicon glyphicon-calendar"></i>
                                </div>
                                <input id="birthdate" class="form-control" placeholder="Choose birthdate" disabled="disabled" />
                            </div>

                            <label>Phone Number</label>
                            <div class="input-group form-margin-bottom">
                                <div class="input-group-addon">
                                    <i class="glyphicon glyphicon-earphone"></i>
                                </div>
                                <input id="phone" class="form-control" type="tel" placeholder="Input phone number" maxlength="15" />
                            </div>

                            <label>Email</label>
                            <div class="input-group lastform-margin-bottom">
                                <div class="input-group-addon">@</div>
                                <input id="email" class="form-control" type="email" placeholder="Input email address" />
                            </div>

							<a id="form-save" class="btn btn-success btn-margin-right btn-form" role="button" disabled="disabled">
								<span>Save</span>
								<i class="glyphicon glyphicon-floppy-disk"></i>
							</a>
							<a id="form-update" class="btn btn-success btn-margin-right btn-form" role="button">
								<span>Update</span>
								<i class="glyphicon glyphicon-pencil"></i>
							</a>
							<a id="form-reset" class="btn btn-warning" role="button">
								<span>Reset</span>
								<i class="glyphicon glyphicon-refresh"></i>
							</a>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script src="<c:url value="/res/js/plugins/jquery.alphanum.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/res/js/plugins/bootstrap-datepicker.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/res/js/plugins/moment.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/res/js/plugins/sweet-alert.min.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/res/js/common.js"/>" type="text/javascript"></script>
	<script src="<c:url value="/res/js/master.js"/>" type="text/javascript"></script>
	<script>
		var path = '${url_path}';
	</script>
</body>
</html>
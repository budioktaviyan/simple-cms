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
						<form class="form-group" method="post" action="<c:url value="employee/save"/>">
							<label>Name</label>
							<div class="input-group form-margin-bottom">
								<input class="form-control" placeholder="Input name" />
								<a href="#modal-toggle" id="modal-toggle" class="input-group-addon">
									<i class="glyphicon glyphicon-search" data-toggle="modal" data-target="#search-modal" data-backdrop="static"></i>
								</a>

								<div id="search-modal" class="modal" role="dialog" tabindex="-1">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<a class="close" role="button" data-dismiss="modal">&times;</a>
												<h3 class="modal-title align-justify">Employee Data</h3>
											</div>
											<div class="modal-body">
												<table class="table table-bordered table-hover align-justify">
													<thead>
														<tr>
															<th>Name</th>
															<th>Gender</th>
															<th>Phone Number</th>
															<th>Email</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>Budi</td>
															<td>Male</td>
															<td>08123456789</td>
															<td>budi@mail.com</td>
															<td>
																<a class="btn btn-primary data-select" role="button" data-dismiss="modal">Select</a>
															</td>
														</tr>
														<tr>
															<td>Oktaviyan</td>
															<td>Female</td>
															<td>02123456789</td>
															<td>oktaviyan@mail.com</td>
															<td>
																<a class="btn btn-primary data-select" role="button" data-dismiss="modal">Select</a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div class="modal-footer">
												<a class="btn btn-primary" role="button" data-dismiss="modal">Close</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<label>Gender</label>
							<select class="form-control form-margin-bottom">
								<option>Male</option>
								<option>Female</option>
							</select>

							<label>Phone Number</label>
							<input class="form-control form-margin-bottom positive-integer" placeholder="Input phone number" maxlength="12" />

							<label>Email</label>
							<input class="form-control lastform-margin-bottom" placeholder="Input email address" />

							<a id="form-save" class="btn btn-success btn-margin-right" role="button" disabled="disabled">
								<span>Save</span>
								<i class="glyphicon glyphicon-floppy-disk"></i>
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
	<script src="<c:url value="/res/js/jquery.numeric.js"/>"></script>
	<script src="<c:url value="/res/js/master.js"/>"></script>
	<script src="<c:url value="/res/js/number.js"/>"></script>
</body>
</html>
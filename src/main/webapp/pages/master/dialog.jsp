<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
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
</body>
</html>
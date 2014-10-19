<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>Employee Data</title>
</head>
<body>
	<div class="container">
		<h1>HELLO!</h1>
		<form method="get" action="<c:url value="/logout"/>">
			<button class="btn btn-lg btn-danger btn-block" type="submit">Logout</button>
		</form>
	</div>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>Forbidden Access</title>
<link href="<c:url value="/res/css/error.css"/>" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="container">
		<h1>Sorry! You don't have permission to access this page!</h1>
		<br />
		<hr />
		<button class="btn btn-lg btn-warning btn-block" onclick="history.back()">Go Back</button>
	</div>
</body>
</html>
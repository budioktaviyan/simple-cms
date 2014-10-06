<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>Employee Data &middot; CMS</title>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

<!-- CSS -->
<link href="<c:url value="/res/css/bootstrap.min.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/bootstrap-theme.min.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/styles.css"/>" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="container">
		<h1>HELLO!</h1>
		<form method="get" action="<c:url value="/logout"/>">
			<button class="btn btn-lg btn-danger btn-block" type="submit">Logout</button>
		</form>
	</div>

	<!-- JS -->
	<script src="<c:url value="/res/js/jquery-2.1.1.min.js"/>"></script>
	<script src="<c:url value="/res/js/bootstrap.min.js"/>"></script>
</body>
</html>
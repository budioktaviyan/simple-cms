<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
<title><sitemesh:write property='title' /> &middot; CMS</title>
<link href="<c:url value="/res/css/bootstrap.min.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/bootstrap-theme.min.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/styles.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/assets/logo.png"/>" rel="shortcut icon" type="image/x-icon" />
<sitemesh:write property='head' />
</head>
<body>
	<script src="<c:url value="/res/js/jquery-2.1.1.min.js"/>"></script>
	<script src="<c:url value="/res/js/bootstrap.min.js"/>"></script>
	<sitemesh:write property='body' />
</body>
</html>
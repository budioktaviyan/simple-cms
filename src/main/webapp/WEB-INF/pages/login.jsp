<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<title>Login &middot; CMS</title>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- CSS -->
<link href="<c:url value="/res/css/bootstrap.min.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/bootstrap-theme.min.css"/>" rel="stylesheet" type="text/css" />
<link href="<c:url value="/res/css/styles.css"/>" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-md-offset-4">
				<div class="account-wall">
					<img class="profile-img" src="<c:url value="/res/assets/admin.png"/>">
					<form class="form-signin">
						<input type="text" class="form-control" placeholder="Username" required autofocus>
						<input type="password" class="form-control" placeholder="Password" required>
						<button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- JS -->
	<script src="<c:url value="/res/js/jquery-2.1.1.min.js"/>"></script>
	<script src="<c:url value="/res/js/bootstrap.min.js"/>"></script>
</body>
</html>
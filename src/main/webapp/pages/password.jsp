<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>Change Password</title>
<link href="<c:url value="/res/css/password.css"/>" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-md-offset-4">
				<div class="account-wall">
					<c:if test="${!authorized}">
						<img class="profile-img" src="<c:url value="/res/assets/fail.png"/>">
					</c:if>
					<c:if test="${authorized}">
						<img class="profile-img" src="<c:url value="/res/assets/unlock.png"/>">
					</c:if>
					<form class="form-signin" method="post" action="<c:url value="/password"/>">
						<input id="oldpassword" type="password" class="form-control" placeholder="Old password" name="oldpassword" required autofocus />
						<input id="newpassword" type="password" class="form-control" placeholder="New password" name="newpassword" required />
						<button class="btn btn-lg btn-success btn-block" type="submit">Change Password</button>
						<button class="btn btn-lg btn-warning btn-block" onclick="history.back()">Go Back</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
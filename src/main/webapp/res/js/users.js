$(document).ready(function() {
	passwordToggled('#password');

	$('#form-reset').click(function() {
		resetPasswordToggled('#password');
	});
});

$('#username').keyup(function() {
	firstInput();
});

$('#form-save').click(function(e) {
	e.preventDefault();
	saveorupdateData();
});

$('#form-update').click(function(e) {
	e.preventDefault();
	saveorupdateData();
});

$('#modal-toggle').click(function(e) {
	toggleObject(e, '#search-modal');
	getUserData('#user-data');
});

function firstInput() {
	if ($('#username').val() != '') {
		$('.btn-form').removeAttr('disabled');
	} else {
		$('.btn-form').attr('disabled', 'disabled');
	}
}

function passwordToggled(selector) {
	$(selector).password({
		placement : 'before'
	});
}

function resetPasswordToggled(selector) {
	$(selector).password('hide');
}

function saveorupdateData() {
	var jsonObject = {
		'users' : [ {
			'id' : $('#userId').val(),
			'username' : $('#username').val(),
			'password' : $('#password').val()
		}, ],
		'roles' : [ {
			'name' : $('#role').val()
		}, ]
	};

	var spinner = getSpinner();
	var request = $.ajax({
		type : 'POST',
		url : path + '/master/users/saveorupdate',
		contentType : 'application/json; charset=UTF-8',
		data : JSON.stringify(jsonObject),
		beforeSend : function() {
			var target = $('body').get(0);
			spinner.spin(target);
		}
	});

	request.success(function(data) {
		spinner.stop();
		switch (data.response) {
		case 'success': {
			getAlertNotification('Success!', 'Data successfully saved!', 'success', 'OK', 'btn-success');
			resetForm();
			resetButton();
			break;
		}
		case 'fail': {
			getAlertNotification('Failed!', 'Failed saving data!', 'error', 'Cancel', 'btn-danger');
			break;
		}
		}
	});

	request.error(function(textStatus, errorThrown) {
		spinner.stop();
		getAlertNotification(errorThrown, textStatus, 'warning', 'Dismiss', 'btn-warning');
	});
}

function updateData(jsonObject) {
	var users = JSON.parse(jsonObject);

	$('#userId').val(users.id);
	$('#username').val(users.username);
	$('#password').val(users.password);
}

function getUserData(selector) {
	$(selector).bootstrapTable('refresh').bootstrapTable({
		height : 400,
		method : 'GET',
		pagination : true,
		search : true,
		searchAlign : 'left',
		showRefresh : true,
		flat : true,
		url : path + '/master/users/search',

		columns : [ {
			field : 'id',
			visible : false
		}, {
			align : 'left',
			field : 'username',
			title : 'Username'
		}, {
			align : 'center',
			field : 'roles.name',
			title : 'Role'
		}, {
			field : 'password',
			visible : false
		}, {
			align : 'center',
			field : 'action',
			formatter : 'actionFormatter',
			events : 'actionEvents',
			title : 'Action'
		} ]
	});
}
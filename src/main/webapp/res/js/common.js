function toggleObject(e, selector) {
	e.preventDefault();
	$(selector).toggleClass('toggled');
}

function resetForm() {
	$('.btn-form').attr('disabled', 'disabled');
	$('input').val('');
	$('select').prop('selectedIndex', 0);
}

function firstInput() {
	if ($('#name').val() != '') {
		$('.btn-form').removeAttr('disabled');
	} else {
		$('.btn-form').attr('disabled', 'disabled');
	}
}

function openDatepicker(selector) {
	$(selector).datepicker({
		autoclose : true,
		format : 'd MM yyyy'
	});
}

function getDateFormat(param, dateFormat) {
	if (param != '') {
		return moment(param).format(dateFormat);
	}
}

function getSpinner() {
	var options = {
		lines : 11,
		length : 10,
		width : 3,
		radius : 10,
		corners : 1,
		top : '50%',
		left : '50%',
		right : '50%'
	};

	return new Spinner(options);
}

function getAlertNotification(titleVal, textVal, typeVal, buttonVal, classVal) {
	sweetAlert({
		title : titleVal,
		text : textVal,
		type : typeVal,
		confirmButtonText : buttonVal,
		confirmButtonClass : classVal
	});
}

function saveorupdateData() {
	var birthdate = $('#birthdate').val();
	var birthdateDB = getDateFormat(birthdate, 'YYYY-MM-DD');
	var jsonObject = {
		'id' : $('#employeeId').val(),
		'name' : $('#name').val(),
		'gender' : $('#gender').val(),
		'birthdate' : birthdateDB,
		'phone' : $('#phone').val(),
		'email' : $('#email').val()
	};

	var spinner = getSpinner();
	var request = $.ajax({
		type : 'POST',
		url : path + '/master/employee/saveorupdate',
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
	var employees = JSON.parse(jsonObject);
	var birthdate = birthdateFormatter(employees.birthdate);

	$('#employeeId').val(employees.id);
	$('#name').val(employees.name);
	$('#birthdate').val(birthdate);
	$('#gender').val(employees.gender);
	$('#phone').val(employees.phone);
	$('#email').val(employees.email);
}

function deleteData(jsonObject) {
	var spinner = getSpinner();
	var request = $.ajax({
		type : 'POST',
		url : path + '/master/employee/delete',
		contentType : 'application/json; charset=UTF-8',
		data : jsonObject,
		beforeSend : function() {
			var target = $('employee-data').get(0);
			spinner.spin(target);
		}
	});

	request.success(function(data) {
		spinner.stop();
		switch (data.response) {
		case 'success': {
			getAlertNotification('Success!', 'Data successfully deleted!', 'success', 'OK', 'btn-success');
			refreshTable('#employee-data');
			break;
		}
		case 'fail': {
			getAlertNotification('Failed!', 'Failed deleting data!', 'error', 'Cancel', 'btn-danger');
			break;
		}
		}
	});

	request.error(function(textStatus, errorThrown) {
		spinner.stop();
		getAlertNotification(errorThrown, textStatus, 'warning', 'Dismiss', 'btn-warning');
	});
}

function getEmployeeData(selector) {
	$(selector).bootstrapTable('refresh').bootstrapTable({
		cache : false,
		height : 400,
		method : 'GET',
		search : true,
		searchAlign : 'left',
		showRefresh : true,
		url : path + '/master/employee/search',

		columns : [ {
			align : 'center',
			field : 'action',
			formatter : 'actionFormatter',
			events : 'actionEvents',
			title : 'Action'
		}, {
			field : 'id',
			visible : false
		}, {
			align : 'left',
			field : 'name',
			title : 'Name'
		}, {
			align : 'center',
			field : 'gender',
			title : 'Gender'
		}, {
			align : 'left',
			field : 'birthdate',
			formatter : 'birthdateTableFormatter',
			title : 'Birthdate'
		}, {
			align : 'center',
			field : 'phone',
			formatter : 'genericFormatter',
			title : 'Phone Number'
		}, {
			align : 'left',
			field : 'email',
			formatter : 'genericFormatter',
			title : 'Email'
		} ]
	});
}

function genericFormatter(value) {
	if (value != '') {
		return value;
	} else {
		return 'N/A';
	}
}

function birthdateFormatter(value) {
	if (value != null) {
		return getDateFormat(value, 'D MMMM YYYY');
	} else {
		return '';
	}
}

function birthdateTableFormatter(value) {
	if (value != null) {
		return getDateFormat(value, 'D MMMM YYYY');
	} else {
		return 'N/A';
	}
}

function actionFormatter(value, row, index) {
	return [ '<a class="edit" href="javascript:void(0)" title="Edit">',
	         	'<i class="glyphicon glyphicon-edit yellow pull-left"></i>',
	         '</a>',
	         '<a class="delete" href="javascript:void(0)" title="Delete">',
	         	'<i class="glyphicon glyphicon-remove red pull-right"></i>',
	         '</a>' ].join('');
}

window.actionEvents = {
	'click .edit' : function(e, value, row, index) {
		var jsonObject = JSON.stringify(row);
		updateData(jsonObject);
		updateButton();
	},
	'click .delete' : function(e, value, row, index) {
		var jsonObject = JSON.stringify(row);
		deleteData(jsonObject);
	}
};

function refreshTable(selector) {
	$(selector).bootstrapTable('refresh');
}

function resetButton() {
	$('#form-save').show();
	$('#form-update').hide();
}

function updateButton() {
	$('#search-modal').modal('hide');
	$('#form-save').hide();
	$('#form-update').removeAttr('disabled');
	$('#form-update').show();
}
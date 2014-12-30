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
	if ($('input').val() != '') {
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

function saveData() {
	var birthdate = $('#birthdate').val();
	var birthdateDB = getDateFormat(birthdate, 'YYYY-MM-DD');
	var jsonObject = {
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

function updateData() {
	var name = $('#name-row').text();
	var gender = $('#gender-row').text();
	var birthdate = $('#birthdate-row').text();
	var phone = $('#phone-row').text();
	var email = $('#email-row').text();

	$('#name').val(name);
	$('#gender').val(gender);
	$('#birthdate').val(birthdate);
	$('#phone').val(phone);
	$('#email').val(email);
}

function deleteData() {
	getAlertNotification('Success!', 'Data successfully deleted!', 'success', 'OK', 'btn-success');
}

function getEmployeeData(selector) {
	$(selector).bootstrapTable({
		cache : false,
		height : 400,
		method : 'GET',
		search : true,
		searchAlign : 'left',
		showRefresh : true,
		url : path + '/master/employee/search',

		columns : [ {
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
			formatter : 'birthdateFormatter',
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
		}, {
			align : 'center',
			field : 'select',
			formatter : 'selectFormatter',
			events : 'selectEvents',
			title : 'Select'
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
		return 'N/A';
	}
}

function selectFormatter(value, row, index) {
	return [ '<a class="edit" href="javascript:void(0)" title="Edit">',
			'<i class="glyphicon glyphicon-edit"></i>', '</a>',
			'<a class="delete" href="javascript:void(0)" title="Delete">',
			'<i class="glyphicon glyphicon-remove"></i>', '</a>' ].join('');
}

window.selectEvents = {
	'click .edit' : function(e, value, row, index) {
		alert('You click edit icon, row: ' + JSON.stringify(row));
	},
	'click .delete' : function(e, value, row, index) {
		alert('You click delete icon, row: ' + JSON.stringify(row));
	}
};

function resetButton() {
	$('#form-save').show();
	$('#form-update').hide();
}

function updateButton() {
	$('#form-save').hide();
	$('#form-update').removeAttr('disabled');
	$('#form-update').show();
}
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

function resetButton() {
	$('#form-save').show();
	$('#form-update').hide();
}

function updateButton() {
	$('#form-save').hide();
	$('#form-update').removeAttr('disabled');
	$('#form-update').show();
}

function getEmployeeData(selector) {
	$(selector).bootstrapTable({
		method : 'GET',
		url : path + '/master/employee/search',
		cache : false,
		height : 400,
		pagination : true,
		search : true,
		showRefresh : true,
		searchAlign : 'left',
		columns : [ {
			field : 'name',
			title : '<p class="text-center">Name</p>',
			align : 'left'
		}, {
			field : 'gender',
			title : '<p class="text-center">Gender</p>',
			align : 'center'
		}, {
			field : 'birthdate',
			title : '<p class="text-center">Birthdate</p>',
			align : 'left'
		}, {
			field : 'phone',
			title : '<p class="text-center">Phone Number</p>',
			align : 'left'
		}, {
			field : 'email',
			title : '<p class="text-center">Email</p>',
			align : 'left'
		} ]
	});
}
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
	var birthdate = getDateFormat($('#birthdate', 'YYYY-MM-DD').val());
	var jsonObject = {
		'name' : $('#name').val(),
		'gender' : $('#gender').val(),
		'birthdate' : birthdate,
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
			getAlertNotification('Success!',
								 'Data successfully saved!',
								 'success',
								 'OK',
								 'btn-success');
			resetForm();
			break;
		}
		case 'fail': {
			getAlertNotification('Failed!',
								 'Failed saving data!',
								 'error',
								 'Cancel',
								 'btn-danger');
			break;
		}
		}
	});

	request.error(function(textStatus, errorThrown) {
		spinner.stop();
		getAlertNotification(errorThrown,
							 textStatus,
							 'warning',
							 'Dismiss',
							 'btn-warning');
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
	getAlertNotification('Success!',
						 'Data successfully deleted!',
						 'success',
						 'OK',
						 'btn-success');
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

function initialTable(table, row) {
	var spinner = getSpinner();
	var response = $.ajax({
		type : 'GET',
		url : path + '/master/employee/search',
		contentType : 'application/json; charset=UTF-8',
		beforeSend : function() {
			var target = $(table).get(0);
			spinner.spin(target);
		}
	});

	response.success(function(data) {
		spinner.stop();

		var content;
		for (var item = 0; item < data.length; item++) {
			content += 	'<tr>' +
							'<td id="name-row">' + data[item].name + '</td>' +
							'<td id="gender-row" class="text-center">' + data[item].gender + '</td>' +
							'<td id="birthdate-row">' + getDateFormat(data[item].birthdate, 'D MMMM YYYY') + '</td>' +
							'<td id="phone-row">' + data[item].phone + '</td>' +
							'<td id="email-row">' + data[item].email + '</td>' +
							'<td>' +
								'<a id="employee-edit" class="btn btn-sm btn-warning btn-block" role="button" data-dismiss="modal">Edit</a>' +
								'<a id="employee-delete" class="btn btn-sm btn-danger btn-block" role="button" data-dismiss="modal">Delete</a>' +
							'</td>' +
						'</tr>';
		}

		$(row).html(content);
		$(table).DataTable({
			ordering : false,
			responsive: false,
			retrieve : true
		});
	});

	response.error(function(textStatus, errorThrown) {
		spinner.stop();
		getAlertNotification(errorThrown,
							 textStatus,
							 'warning',
							 'Dismiss',
							 'btn-warning');
	});
}
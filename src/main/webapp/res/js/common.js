function toggleObject(e, selector) {
	e.preventDefault();
	$(selector).toggleClass('toggled');
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
		format : 'd MM yyyy',
		autoclose : true
	});
}

function getDateFormat(param) {
	return moment(param).format('YYYY-MM-DD');
}

function saveData() {
	var birthdate = getDateFormat($('#birthdate').val());
	var jsonObject = {
		'name' : $('#name').val(),
		'gender' : $('#gender').val(),
		'birthdate' : birthdate,
		'phone' : $('#phone').val(),
		'email' : $('#email').val()
	};

	var request = $.ajax({
		type : 'POST',
		url : path + '/master/employee/saveorupdate',
		contentType : 'application/json; charset=UTF-8',
		data : JSON.stringify(jsonObject),
		beforeSend : function() {
			sweetAlert({
				title : 'Please wait!',
				text : 'Saving data...',
				type : 'info',
				confirmButtonText : 'Dismiss'
			});
		}
	});

	request.success(function(data) {
		switch (data.response) {
		case 'success': {
			sweetAlert({
				title : 'Success!',
				text : 'Data successfully saved!',
				type : 'success',
				confirmButtonText : 'OK'
			});
			resetForm();
			break;
		}
		case 'fail': {
			sweetAlert({
				title : 'Failed!',
				text : 'Failed saving data!',
				type : 'error',
				confirmButtonText : 'Close'
			});
			break;
		}
		}
	});

	request.error(function(textStatus, errorThrown) {
		sweetAlert({
			title : textStatus,
			text : errorThrown,
			type : 'warning',
			confirmButtonText : 'Close'
		});
	});
}

function updateData() {
	var name = $('#name-row').text();
	var gender = $('#gender-row').text();
	var phone = $('#phone-row').text();
	var email = $('#email-row').text();

	$('#name').val(name);
	$('#gender').val(gender);
	$('#phone').val(phone);
	$('#email').val(email);
}

function deleteData() {
	alert('Delete employee');
}

function resetForm() {
	$('.btn-form').attr('disabled', 'disabled');
	$('input').val('');
	$('select').prop('selectedIndex', 0);
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

function initialDialog(selector, data) {
	var content = '<div class="table-responsive">' +
						'<table class="table table-striped table-bordered table-hover table-condensed no-margin">' +
							'<thead>' +
								'<tr>' +
									'<th class="text-center">Name</th>' +
									'<th class="text-center">Gender</th>' +
									'<th class="text-center">Phone</th>' +
									'<th class="text-center">Email</th>' +
									'<th class="text-center">Action</th>' +
								'</tr>' +
							'</thead>' +
							'<tbody>';

	for (var i = 0; i < 3; i++) {
		content += '<tr>' +
						'<td id="name-row">' + data + '</td>' +
						'<td id="gender-row" class="text-center">Female</td>' +
						'<td id="phone-row">+628567646893</td>' +
						'<td id="email-row">budi.oktaviyan@icloud.com</td>' +
						'<td>' +
							'<a id="employee-edit" class="btn btn-sm btn-warning btn-block" role="button" data-dismiss="modal">Edit</a>' +
							'<a id="employee-delete" class="btn btn-sm btn-danger btn-block" role="button" data-dismiss="modal">Delete</a>' +
						'</td>' +
				   '</tr>';
	}

	content += '</tbody>' + '</table>' + '<div>';
	$(selector).html(content);
}
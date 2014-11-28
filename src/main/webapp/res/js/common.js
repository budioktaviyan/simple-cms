// Global toast var
var toast;

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

function saveData() {
	var message;
	var messageType;
	var jsonObject = {
		'name' : $('#name').val(),
		'gender' : $('#gender').val(),
		'birthdate' : $('#birthdate').val(),
		'phone' : $('#phone').val(),
		'email' : $('#email').val()
	};

	var request = $.ajax({
		type : 'POST',
		url : path + '/master/employee/saveorupdate',
		contentType : 'application/json; charset=UTF-8',
		data : JSON.stringify(jsonObject),
		beforeSend : function(Xhr) {
			message = '<i class="glyphicon glyphicon-info-sign" />&nbsp; Saving data...';
			messageType = 'info';
			toastAlert(message, messageType);
		}
	});

	request.success(function(data) {
		switch (data.response) {
		case 'success': {
			message = '<i class="glyphicon glyphicon-ok" />&nbsp; Data Successfully Saved!';
			messageType = 'success';
			break;
		}
		case 'fail': {
			message = '<i class="glyphicon glyphicon-remove" />&nbsp; Failed Saved Data!';
			messageType = 'danger';
			break;
		}
		}

		toastRemove();
		toastAlert(message, messageType);
		resetForm();
	});

	request.error(function(textStatus, errorThrown) {
		console.log(textStatus + '\n' + errorThrown);
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

function toastAlert(messages, messageType) {
	toast = $.simplyToast(messages, type = messageType, {
		'offset' : {
			'from' : 'top',
			'amount' : 60
		},
		'align' : 'center',
		'minWidth' : 500,
		'delay' : 2000,
		'allowDismiss' : false
	});
}

function toastRemove() {
	$.simplyToast.remove(toast);
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

function dialogDragable(selector) {
	$(selector).draggable({
		handle : '.modal-dialog'
	});
}

function openDatepicker(selector) {
	$(selector).datepicker({
		format : 'yyyy-mm-d',
		autoclose : true
	});
}
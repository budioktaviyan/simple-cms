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

function getDateFormat(param) {
	if (param != '') {
		return moment(param).format('YYYY-MM-DD');
	}
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
	var birthdate = getDateFormat($('#birthdate').val());
	var jsonObject = {
		'name' : $('#name').val(),
		'gender' : $('#gender').val(),
		'birthdate' : birthdate,
		'phone' : $('#phone').val(),
		'email' : $('#email').val()
	};
	var spinnerOpts = {
		lines : 11,
		length : 10,
		width : 3,
		radius : 10,
		corners : 1,
		top : '50%',
		left : '50%',
		right : '50%'
	};

	var spinner = new Spinner(spinnerOpts);
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
    var content = 	'<tr>' +
				        '<td id="name-row">Budi Oktaviyan Suryanto</td>' +
				        '<td id="gender-row" class="text-center">Male</td>' +
				        '<td id="birthdate-row">4 October 1987</td>' +
				        '<td id="phone-row">+628567646893</td>' +
                        '<td id="email-row">budi.oktaviyan@icloud.com</td>' +
				        '<td>' +
				        	'<a id="employee-edit" class="btn btn-sm btn-warning btn-block pull-left" role="button" data-dismiss="modal">Edit</a>' +
				        	'<a id="employee-delete" class="btn btn-sm btn-danger btn-block pull-right" role="button" data-dismiss="modal">Delete</a>' +
				        '</td>' +
			        '</tr>' +
			        '<tr>' +
				        '<td id="name-row">Indah Kurniawati</td>' +
				        '<td id="gender-row" class="text-center">Female</td>' +
				        '<td id="birthdate-row">16 February 1984</td>' +
				        '<td id="phone-row">+6285716084368</td>' +
                        '<td id="email-row">indah_aquarius@yahoo.com</td>' +
				        '<td>' +
				        	'<a id="employee-edit" class="btn btn-sm btn-warning btn-block pull-left" role="button" data-dismiss="modal">Edit</a>' +
				        	'<a id="employee-delete" class="btn btn-sm btn-danger btn-block pull-right" role="button" data-dismiss="modal">Delete</a>' +
				        '</td>' +
			        '</tr>' +
			        '<tr>' +
				        '<td id="name-row">Amira Ratu Meidina</td>' +
				        '<td id="gender-row" class="text-center">Female</td>' +
				        '<td id="birthdate-row">14 May 2014</td>' +
				        '<td id="phone-row">+6281289880275</td>' +
                        '<td id="email-row">indah.arm@gmail.com</td>' +
				        '<td>' +
				        	'<a id="employee-edit" class="btn btn-sm btn-warning btn-block pull-left" role="button" data-dismiss="modal">Edit</a>' +
				        	'<a id="employee-delete" class="btn btn-sm btn-danger btn-block pull-right" role="button" data-dismiss="modal">Delete</a>' +
				        '</td>' +
			        '</tr>';
    $(row).html(content);
    $(table).DataTable({
       ordering: false,
       responsive: true,
       retrieve: true
   });
}
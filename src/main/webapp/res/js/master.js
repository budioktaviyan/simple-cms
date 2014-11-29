$(document).ready(function() {
	openDatepicker('#birthdate-toggle');
	resetButton();

	$('#menu-toggle').click(function(e) {
		toggleObject(e, '#wrapper');
	});

	$('#phone').numeric({
		allowPlus : true,
		allowMinus : false,
		allowThouSep : false,
		allowDecSep : false
	});
});

$('input').keyup(function() {
	firstInput();
});

$('#form-save').click(function(e) {
	e.preventDefault();
	saveData();
});

$('#form-reset').click(function() {
	resetForm();
	resetButton();
});

$('#modal-toggle').click(function(e) {
	toggleObject(e, '#search-modal');
	initialDialog('#employee-data', 'Budi Oktaviyan');
});

$(document).on('click', '#employee-edit', function() {
	updateData();
	updateButton();
});

$(document).on('click', '#employee-delete', function() {
	deleteData();
});
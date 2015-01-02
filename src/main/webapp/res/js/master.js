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

$('#name').keyup(function() {
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

$('#form-reset').click(function() {
	resetForm();
	resetButton();
});

$('#modal-toggle').click(function(e) {
	toggleObject(e, '#search-modal');
	getEmployeeData('#employee-data');
});
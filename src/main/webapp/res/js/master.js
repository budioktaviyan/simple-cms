$(document).ready(function() {
	$('#menu-toggle').click(function(e) {
		toggleObject(e, '#wrapper');
	});

	$('#phone').numeric({
		allowPlus : true,
		allowMinus : false,
		allowThouSep : false,
		allowDecSep : false
	});

	resetButton();

	$('.modal').each(function() {
		dialogDragable('.modal')
	});
});

$('input').keyup(function() {
	firstInput();
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
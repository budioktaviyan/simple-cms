$(document).ready(function() {
	$('#menu-toggle').click(function(e) {
		toggleObject(e, '#wrapper');
	});

	$('input').keyup(function() {
		firstInput();
	});

	$('#phone').numeric({
		allowPlus : true,
		allowMinus : false,
		allowThouSep : false,
		allowDecSep : false
	});

	$('#form-reset').click(function() {
		resetForm();
	});

	$('.modal').each(function() {
		dialogDragable('.modal')
	});
});

$('#modal-toggle').click(function(e) {
	toggleObject(e, '#search-modal');
	initialDialog('#employee-data', 'Budi Oktaviyan');
});
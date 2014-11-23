function toggleObject(e, selector) {
	e.preventDefault();
	$(selector).toggleClass(TOGGLED);
}

function firstInput() {
	if ($('input').val() != '') {
		$('#form-save').removeAttr('disabled');
	} else {
		$('#form-save').attr('disabled', 'disabled');
	}
}

function resetForm() {
	$('#form-save').attr(DISABLED, DISABLED);
	$('input').val('');
	$('select').prop('selectedIndex', EMPTY);
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
						'<td>' + data + '</td>' +
						'<td class="text-center">Male</td>' +
						'<td>+628567646893</td>' +
						'<td>budi.oktaviyan@icloud.com</td>' +
						'<td>' +
							'<a class="btn btn-sm btn-warning btn-block" role="button" data-dismiss="modal">Edit</a>' +
							'<a class="btn btn-sm btn-danger btn-block" role="button" data-dismiss="modal">Delete</a>' +
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
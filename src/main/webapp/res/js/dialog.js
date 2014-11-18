jQuery(document).ready(function() {
	jQuery(".modal").each(function(i) {
		$(this).draggable({
			handle : ".modal-dialog"
		});
	});
});
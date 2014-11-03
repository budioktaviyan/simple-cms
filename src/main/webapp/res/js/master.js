jQuery(document).ready(function() {
	jQuery('#menu-toggle').click(function(e) {
		menuClick(e);
	});

	jQuery('input').keyup(function() {
		buttonToggle();
	});

	jQuery('#form-reset').click(function() {
		clearText();
	});

	jQuery('#modal-toggle').click(function(e) {
		modalClick(e);
	});

	jQuery('.data-select').click(function() {
		clickData();
	});

	function menuClick(e) {
		e.preventDefault();
		jQuery('#wrapper').toggleClass('toggled');
	}

	function buttonToggle() {
		if (jQuery('input').val() != '') {
			jQuery('#form-save').removeAttr('disabled');
		} else {
			jQuery('#form-save').attr('disabled', 'disabled');
		}
	}

	function clearText() {
		jQuery('#form-save').attr('disabled', 'disabled');
		jQuery('input').val('');
		jQuery('select').prop('selectedIndex', 0);
	}

	function modalClick(e) {
		e.preventDefault();
		jQuery('#search-modal').toggleClass('toggled');
	}

	function clickData() {
		console.log('Content...');
	}
});
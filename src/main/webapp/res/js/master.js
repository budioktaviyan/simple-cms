jQuery(document).ready(function() {
	jQuery('#menu-toggle').click(function(e) {
		e.preventDefault();
		jQuery('#wrapper').toggleClass('toggled');
	});

	jQuery('input').keyup(function() {
		if (jQuery('input').val() != '') {
			jQuery('#form-save').removeAttr('disabled');
		} else {
			jQuery('#form-save').attr('disabled', 'disabled');
		}
	});

	jQuery('#form-reset').click(function() {
		jQuery('#form-save').attr('disabled', 'disabled');
		jQuery('input').val('');
		jQuery('select').prop('selectedIndex', 0);
	});

	jQuery('.positive-integer').numeric({
		decimal : false,
		negative : false
	});
});
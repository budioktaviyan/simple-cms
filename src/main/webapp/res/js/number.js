jQuery(document).ready(function() {
	jQuery('.positive').numeric({
		negative : false
	});

	jQuery('.positive-integer').numeric({
		decimal : false,
		negative : false
	});
});
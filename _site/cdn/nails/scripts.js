var is_touch = function() {
	return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? true	: false;
}
var do_prepare = function() {
	if (!is_touch()) {
		$('html').addClass('has-hover');
	}
}

var do_email = function() {
	var e = global.em;
	var e = e.replace('#', '@').replace(/\+/g, '.');
	var h = '<a href="mailto:'+e+'">Email</a>';
	$('.em').empty().html(h);
}

$(document).ready(function() {
	do_prepare();
	do_email();
});
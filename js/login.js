jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top",  Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop() ) + "px");
	this.css("left", Math.max(0, (($(window).width()  - $(this).outerWidth() ) / 2) + $(window).scrollLeft()) + "px");

	return this;
};


$(window).resize(function() {
	$('.login-box').center();
});


$(document).ready(function() {
	var backup = {
	'login': $('fieldset #login').html()
	};
	$('.login-box').center();
	$('fieldset #forgotel').css('visibility', 'hidden');
	$('fieldset input[name=forgotemail]').attr('disabled', true);

	$('fieldset #forgotch').change(function() {
	var el = {
		'username' : $('fieldset input[name=username]'),
		'password' : $('fieldset input[name=password]'),
		'remember' : $('fieldset input[name=remember]'),
		'dremember': $('fieldset .remember'),
		'forgotin' : $('fieldset input[name=forgotemail]'),
		'forgotch' : $('fieldset #forgotch'),
		'forgotel':  $('fieldset #forgotel'),
		'login'    : $('fieldset #login')
	};


	if (el['forgotch'].prop('checked')) {
		el['remember'].attr('disabled', true);
		el['remember'].attr('readonly', true);
		el['dremember'].toggleClass('disabled');

		el['username'].attr('disabled', true);
		el['password'].attr('disabled', true);

		el['forgotel'].css('visibility', '');
		el['forgotin'].removeAttr("disabled");

		el['login'].html('Send');
		el['login'].toggleClass('btn-forgot');

	} else {
		el['remember'].removeAttr("disabled");
		el['remember'].removeAttr("readonly");
		el['dremember'].toggleClass('disabled');

		el['username'].removeAttr('disabled');
		el['password'].removeAttr('disabled');


		el['forgotel'].css('visibility', 'hidden');
		el['forgotin'].attr('disabled', true);

		el['login'].html(backup['login']);
		el['login'].toggleClass('btn-forgot');
	}
	});
});

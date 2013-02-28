$(document).ready(function() {
    // TODO: center window

    var backup   = {
        'login': $('fieldset #login').html()
    };
    $('fieldset #forgotel').css('visibility', 'hidden');
    $('fieldset input[name=forgotemail]').attr('disabled', true);


    $('fieldset #forgotch').change(function() {
        var el = {
            'username': $('fieldset input[name=username]'),
            'password': $('fieldset input[name=password]'),
            'remember': $('fieldset input[name=remember]'),
            'forgotin': $('fieldset input[name=forgotemail]'),
            'forgotch': $('fieldset #forgotch'),
            'forgotel': $('fieldset #forgotel'),
            'login'   : $('fieldset #login')
        };


        if (el['forgotch'].prop('checked')) {
            el['remember'].attr('disabled', true);
            el['remember'].attr('readonly', true);

            el['username'].attr('disabled', true);
            el['password'].attr('disabled', true);

            el['forgotel'].css('visibility', '');
            el['forgotin'].removeAttr("disabled");

            el['login'].html('Send');
            el['login'].toggleClass('forgot');

        } else {
            el['remember'].removeAttr("disabled");
            el['remember'].removeAttr("readonly");

            el['username'].removeAttr('disabled');
            el['password'].removeAttr('disabled');


            el['forgotel'].css('visibility', 'hidden');
            el['forgotin'].attr('disabled', true);

            el['login'].html(backup['login']);
            el['login'].toggleClass('forgot');
        }
    });
});

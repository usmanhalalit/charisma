(function($) {

    jQuery.fn.linify = function(options) {
        options = $.extend({className: 'line'}, options || {});

        return this.each(function() {
            var text = $(this).text().replace(/(^\s+|\s+$)/g, '').replace(/\s+/g, ' ');
    	    var html = '';
    	    for (var i = 0; i < text.length; i++) {
    	        html += "<span>" + text.charAt(i) + "</span>";
    	    }
    	    $(this).html(html);

            var allLines = '', thisLine = '', lastTop = -1;

            $(this).find('span').each(function() {
                if (this.offsetTop > lastTop) {
                    if (thisLine.length > 0) {
                        allLines += thisLine + "</div>";
                    }
                    thisLine = "<div>";
                    lastTop = this.offsetTop;
                }
                thisLine += $(this).text();
            });

            if (thisLine.length > 0) {
                allLines += thisLine + "</div>";
            }

            $(this).html($(allLines).addClass(options.className));
        });
    };
    
})(jQuery);

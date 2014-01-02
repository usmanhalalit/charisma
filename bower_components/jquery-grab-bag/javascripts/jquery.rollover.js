/**
 * Rollover effect, changes element's src attribute on hover, e.g.:
 *
 * image.png?foo=bar => image_h.png?foo=bar
 *
 * Pass true to preload images.
 */
jQuery.fn.rollover = function(preload) {
    this.filter(':not([src*="_h."])').each(function() {
        var a = this.src, b = this.src.replace(/\.(\w+(\?[^$]*)?)$/, '_h.$1');
        $(this).hover(function() { this.src = b; }, function() { this.src = a; });
        if (preload) {
            var i = new Image;
            i.src = b;
        }
    });
    return this;
};
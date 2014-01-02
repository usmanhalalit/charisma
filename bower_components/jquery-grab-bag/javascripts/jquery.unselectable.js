(function($) {
  
    $.fn.unselectable = function() {
        this.each(function() {
            this.onselectstart = function() { return false; };
            this.unselectable = 'on';
            this.style.MozUserSelect = 'none';
        });
    };
  
})(jQuery);
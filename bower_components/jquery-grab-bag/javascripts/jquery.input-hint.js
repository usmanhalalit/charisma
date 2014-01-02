/*
 * (c) 2008-9 Jason Frame
 * Auxiliary element code based on work by pjesi (http://wtf.hax.is/)
 */
(function ($) {
  
  /**
   * Initialise input hints on all matched inputs.
   *
   * Usage examples:
   *
   * Add hints (placeholders) to all inputs with the 'placeholder' attribute set:
   *   $('input[placeholder],textarea[placeholder]').inputHint();
   *
   * Add hints to all matched elements, grabbing the hint text from each element's
   * adjacent <kbd/> tag:
   *   $('input').inputHint({using: '+ kbd'});
   *
   * Options keys:
   *  using: jQuery selector locating element containing hint text, relative to
   *         the input currently being considered.
   *  hintAttr - tag attribute containing hint text. Default: 'placeholder'
   *  hintClass - CSS class to apply to inputs with active hints. Default: 'hint'
   */
  $.fn.inputHint = function(options) {
    
    var i = document.createElement('input');
    if ('placeholder' in i) return this;
    
    options = $.extend({hintClass: 'hint', hintAttr: 'placeholder'}, options || {});
    
    function hintFor(element) {
      var h;
      if (options.using && (h = $(options.using, element)).length > 0) {
        return h.text();
      } else {
        return $(element).attr(options.hintAttr) || '';
      }
    }

    function showHint() {
      if ($(this).val() == '') {
        $(this).addClass(options.hintClass).val(hintFor(this));
      }
    }

    function removeHint() {
      if ($(this).hasClass(options.hintClass)) $(this).removeClass(options.hintClass).val('');
    }
    
    this.filter(function() { return !!hintFor(this); })
        .focus(removeHint)
        .blur(showHint)
        .blur();

    this.each(function() {
      var self = this;
      $(this).parents('form').submit(function() { removeHint.apply(self); });
    });

    return this;

  };
  
})(jQuery);
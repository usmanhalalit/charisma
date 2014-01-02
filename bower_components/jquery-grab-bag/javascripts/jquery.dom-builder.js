/**
 * Simple DOM Builder
 * (c) 2008, 2009 Jason Frame (jason@onehackoranother.com)
 *
 * Usage:
 *
 * $$('table#foo',
 *   $$('tr', $$('th.col-1', 'ID'), $$('th.col-2', 'Username'), $$('th.col-3', 'Email')),
 *   $$('tr', $$('td', 1), $$('td', 'jaz303'), $$('td', 'jason@magiclamp.co.uk')),
 *   {style: "margin:10px"}
 * );
 *
 * Returns a jQuery object.
 */
function $$() {
	
	var args 	= jQuery.makeArray(arguments),
		tag		= args.shift();
		last 	= args[args.length - 1],
		options	= {},
		$ele	= null,
		match	= null;
		
	if (typeof last == 'object' && !(last.html) && !(last.nodeType)) {
        options = args.pop();
    }
    
    if (match = /^([\w-]+)(#([\w-]+))?((\.[\w-]+)*)$/.exec(tag)) {
        
        var $ele = jQuery(document.createElement(match[1]));
        
        if (match[3]) $ele[0].id = match[3];
        if (match[4]) $ele[0].className = match[4].replace(/\./g, ' ');
        
        for (var k in options) {
            if (k == 'hover' && options[k] instanceof Array) {
                $ele.hover(options[k][0], options[k][1]);
            } else if (jQuery.isFunction(options[k])) {
                $ele.bind(k, options[k]);
            } else {
                $ele.attr(k, options[k])
            }
        }

		$$.appendAll($ele, args);
		
    }
    
    return $ele;

};

$$.appendAll = function($target, items) {
	for (var i = 0; i < items.length; i++) {
		var thing = items[i];
		if (thing === null) continue;
		else if (thing instanceof Array) $$.appendAll($target, thing);
		else $target.append(thing);
	}
}

$$.make = function(tagName) {
	return function() {
		var args = jQuery.makeArray(arguments);
		args.unshift(tagName);
		return $$.apply(this, args);
	};
};

(function(scope) {
	// thank you, http://www.htmldog.com/reference/htmltags/
	var tags = ["a", "abbr", "acronym", "address", "area", "b", "base", "bdo",
	            "big", "blockquote", "body", "br", "button", "caption", "cite",
	            "code", "col", "colgroup", "dd", "del", "dfn", "div", "dl",
	            "dt", "em", "fieldset", "form", "h1", "h2", "h3", "h4", "h5",
	            "h6", "head", "html", "hr", "i", "img", "input", "ins", "kbd",
	            "label", "legend", "li", "link", "map", "meta", "noscript",
	            "object", "ol", "optgroup", "option", "p", "param", "pre", "q",
	            "samp", "script", "select", "small", "span", "strong", "style",
	            "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th",
	            "thead", "title", "tr", "tt", "ul", "var"];
	for (var i = 0; i < tags.length; i++)
		scope[tags[i].toUpperCase()] = $$.make(tags[i]);
})(this);

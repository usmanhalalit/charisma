// Initialize cookie resizing
//
// selector - jQuery selector identifying resizing links. class name from each
//            link will be used as the size
// defaultSize - what it says on the tin. will be applied to body when cookie
//               is not present
function cookieResize(selector, defaultSize) {
    
    var lastSize = defaultSize;
    
    function write(name, value, days) {
        var expires = "";
    	if (days) {
      		var date = new Date();
      		date.setTime(date.getTime() + (days * 86400000));
      		var expires = "; expires=" + date.toGMTString();
     	}
     	document.cookie = name + "=" + value + expires + "; path=/";
    }

    function read(name) {
     	name += "=";
     	var ca = document.cookie.split(';');
     	for(var i = 0; i < ca.length; i++) {
      		var c = ca[i];
      		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
     	}
     	return null;
    }

    function updateSizeFromCookie() {
        $('body').removeClass(lastSize);
        lastSize = read('size') || defaultSize;
        $('body').addClass(lastSize);
    }
    
    jQuery(selector).click(function() {
        write('size', this.className);
        updateSizeFromCookie();
        return false;
    });

    updateSizeFromCookie();
    
}

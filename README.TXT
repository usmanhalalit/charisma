README.TXT ~ some notes about contributing this at better understanding level

=======================================
login.html
----------

	BEFORE:
	- 53 requests:
		- 1x  document
		- 11x css
		- 3x  images
		- 36x scripts
		- 2x  fonts


	~~ some analysis:
	- by 'audits in chromium'

		- Leverage proxy caching (2)
		-- The following publicly cacheable resources contain a Set-Cookie header. This security vulnerability can cause cookies to be shared by multiple users.
		--- [from-css]: https://fonts.googleapis.com/css?family=Shojumaru
		--- [from-css]: https://fonts.googleapis.com/css?family=Karla|Ubuntu

		- Remove unused CSS rules (1341)
		-- 146.36KB (67%) of CSS is not used by the current page

Combine external CSS (9)
Combine external JavaScript (36)
Enable gzip compression (2)
Web Page Performance


	~~ in order:
	/css/bootstrap-cerulean.css
	/css/bootstrap-responsive.css
	/css/charisma-app-j3.css
	/css/jquery-ui-1.8.21.custom.css
	/css/chosen.css
	/css/uniform.default.css
	/css/jquery.iphone.toggle.css
	/css/opa-icons.css
	~from-css: https://fonts.googleapis.com/css?family=Shojumaru
	~from-css: https://fonts.googleapis.com/css?family=Karla|Ubuntu
	/css/bootstrap-j3.css

	AFTER:


	/css/
	/js/login.js
.


bootstrap
	classic			| cerulean
	========================|=============================================
	162:137 Helvetica Neue  | Ubuntu







































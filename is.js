//	is.js 0.0.1
//	Author Aras Atasaygin

;(function() {

	//	Baseline
	//	--------

	//	root object is window in the browser
	var root = this;

	//	define is object, current version and configs
	var is = {};
	is.version = '0.0.1';
	is.config = {};

	//	TODO: Add AMD and CommonJS support
	//	is object set global to the browser window
	root.is = is;

	//	Type checks
	//	-----------

	//	Test check
	is.testCheck = function(a) {
		console.log('test check ' + a);
	}

	//	Presence checks
	//	---------------

	//	Regexp checks
	//	-------------

	//	Environment checks
	//	------------------

	//	Arithmetic checks
	//	-----------------

	//	Time checks
	//	-----------

	//	Array checks
	//	------------

	//	Object checks
	//	-------------

	//	DOM checks
	//	----------

	//	Syntax checks
	//	----------

	//	String checks
	//	----------

	//	ES6 checks
	//	----------

}.call(this));

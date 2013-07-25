if (typeof Zepto != 'undefined' && typeof define === "function" && define.amd && (define.amd.jQuery || define.amd.zepto) ) {
	define( "jquery", [], function () { return Zepto; } );
	define( "zepto", [], function () { return Zepto; } );
}
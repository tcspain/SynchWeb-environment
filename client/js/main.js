require.config({
    "baseUrl": "client/js",
    "paths": {
	underscore: "vendor/underscore.min",
	backbone: "vendor/backbone/backbone",
	marionette: "vendor/backbone/backbone.marionette",
	jquery: "vendor/jquery/jquery-1.9.1.min",
    },
    "shim": {
	"underscore": {
	    exports: '_'
	},
	"backbone": {
	    deps: ["underscore", "jquery"],
	    exports: "Backbone"
	},
	"marionette": {
	    deps: ["backbone"],
	    exports: "Marionette"
	},
    }
});

require(["marionette"], function(Marionette) {
    window.app = new Marionette.Application();

    app.addRegions({
	header: "#header-region",
	footer: "#footer-region",
	body: "#body-region"
    });

    require(["app"], function () {
	app.start();
    });

});

    
    

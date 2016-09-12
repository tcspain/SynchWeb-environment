require.config({
    paths: {
	underscore: "vendor/underscore.min",
	backbone: "vendor/backbone/backbone",
	marionette: "vendor/backbone/backbone.marionette",
	jquery: "vendor/jquery/jquery-1.9.1.min",
	"jquery-ui": "vendor/jquery/jquery-ui.min",
    },

    shim: {
	underscore: {
	    exports: "_"
	},
	backbone: {
	    deps: ["underscore", "jquery"],
	    exports: "Backbone"
	},
	marionette: {
	    deps:["backbone"],
	    exports: "Marionette"
	},
    },
});


require(["app"], function(app) {
    app.start()
});

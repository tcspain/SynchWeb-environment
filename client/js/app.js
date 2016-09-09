app.module("Main", function (Main) {
    Main.views = {};

    app.addInitializer(function() {
	Main.show();
    });

    this.show = function() {
	this.headerView = new this.views.HeaderView();
	this.footerView = new this.views.FooterView();
	this.bodyView = new this.views.BodyView();

	app.header.show(this.headerView);
	app.body.show(this.bodyView);
	app.footer.show(this.footerView);
    };

    // views

    Main.views.BodyView = Marionette.ItemView.extend({
	template: "#body"
    });

    Main.views.FooterView = Marionette.ItemView.extend({
	template: "#footer"
    });

    Main.views.HeaderView = Marionette.ItemView.extend({
	template: "#header"
    });

});
    

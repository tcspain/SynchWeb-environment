define(["backbone", "marionette", "underscore", "jquery",

	"modules/default/views/header",
	"modules/default/views/body",
	"modules/default/views/footer",
       ],
       function(Backbone, Marionette, _, $, HeaderView, BodyView, FooterView) {

	   window.app = new Marionette.Application();

	   app.addRegions( {
	       header: "#header-region",
	       body1: "#body1-region",
	       footer: "#footer-region"
	   });

	   app.addInitializer(function(){
	       require([], function() {
		   this.headerView = new HeaderView();
		   app.header.show(this.headerView);

		   this.bodyView = new BodyView();
		   app.body1.show(this.bodyView);

		   this.footerView = new FooterView();
		   app.footer.show(this.footerView);
	       });
	   });

	   return app
       });


sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer"
], function(
	Shell, App, Page, ComponentContainer) {
	"use strict";

	sap.ui.getCore().attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "Process Flow with Connection Labels",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "sap.suite.ui.commons.sample.ProcessFlowConnectionLabels",
								settings : {
									id : "sap.suite.ui.commons.sample.ProcessFlowConnectionLabels"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});

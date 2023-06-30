/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/ControlTaskVylegzhanin/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/ControlTaskVylegzhanin/test/integration/pages/Worklist",
	"zjblessons/ControlTaskVylegzhanin/test/integration/pages/Object",
	"zjblessons/ControlTaskVylegzhanin/test/integration/pages/NotFound",
	"zjblessons/ControlTaskVylegzhanin/test/integration/pages/Browser",
	"zjblessons/ControlTaskVylegzhanin/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.ControlTaskVylegzhanin.view."
	});

	sap.ui.require([
		"zjblessons/ControlTaskVylegzhanin/test/integration/WorklistJourney",
		"zjblessons/ControlTaskVylegzhanin/test/integration/ObjectJourney",
		"zjblessons/ControlTaskVylegzhanin/test/integration/NavigationJourney",
		"zjblessons/ControlTaskVylegzhanin/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
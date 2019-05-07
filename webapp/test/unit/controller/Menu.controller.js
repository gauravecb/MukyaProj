/*global QUnit*/

sap.ui.define([
	"com/tree/mukesh/controller/Menu.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Menu Controller");

	QUnit.test("I should test the Menu controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
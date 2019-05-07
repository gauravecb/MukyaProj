sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.tree.mukesh.controller.Menu", {
		onInit: function () {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("com/tree/mukesh/model") + "/Tree.json");
			this.getView().setModel(oModel);
		},
		onUserNamePress: function () {
			this.getSplitAppObj().toMaster(this.createId("master2"));
			this.getSplitAppObj().to(this.createId("detail1"));
		},
		getSplitAppObj: function () {
			var result = this.byId("app");

			return result;
		},
		onMenuPress : function(){
			this.getSplitAppObj().toMaster(this.createId("master"));
			this.getSplitAppObj().to(this.createId("detail"));
		},
		onPressTreeItem : function(){
			this.getSplitAppObj().toDetail(this.createId("detail2"));
		},
		onPressDetailBack : function() {
			this.getSplitAppObj().backDetail();
		},
	});
});
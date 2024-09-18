sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/ComponentContainer",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
], function (UIComponent, ComponentContainer, JSONModel, ODataModel) {
    "use strict";

    return UIComponent.extend("DokkanProject.Component", {
        metadata: {
            manifest: "json"
        },

        init: function() {
           
            UIComponent.prototype.init.apply(this, arguments);

            var oModeloGlobal = new JSONModel({
                infoPantallaInicio: {
                    id: "",
                    nombre: ""
                }
            });
            
            this.setModel(oModeloGlobal, "global"); 
        }
    });
});

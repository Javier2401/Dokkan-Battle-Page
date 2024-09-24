sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    return Controller.extend("DokkanProject.controller.Inicio", {

        onInit: function() {

        },

        onCambiarPantalla1: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("News");
        },

        onCambiarPantalla2: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Summons");
        }
        
    });
    
});
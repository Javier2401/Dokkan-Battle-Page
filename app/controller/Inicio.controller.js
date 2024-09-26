sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" 

], function (Controller, MessageToast) {

    return Controller.extend("DokkanProject.controller.Inicio", {

        onInit: function() {

        },

        pruebaToast: function() {
            MessageToast.show("Funciona");

            // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // oRouter.navTo("");
        },

        onCambiarPantallaCharacterInfo: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("");
        },

        onCambiarPantallaNews: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("News");
        },

        onCambiarPantallaSummons: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Summons");
        }
        
    });
    
});
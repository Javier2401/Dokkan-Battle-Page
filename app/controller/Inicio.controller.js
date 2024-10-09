sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" 

], function (Controller, MessageToast) {

    return Controller.extend("DokkanProject.controller.Inicio", {

        onInit: function() {

        },

        onCambiarPantallaNews: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("News");
        },

        onCambiarPantallaSummons: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Summons");
        },

        onCambiarPantallaCharacters: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Characters");
        },

        onCambiarPantallaCharacterDetails: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Characters-Details");
        },

        
        
    });
    
});
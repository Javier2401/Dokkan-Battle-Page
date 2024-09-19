sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    return Controller.extend("DokkanProject.controller.Inicio", {

        onInit: function() {

        },

        onCambiarPantalla: function() {
            console.log("PRUEBA 1");
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            console.log("PRUEBA 2");
            oRouter.navTo("News");
            console.log("PRUEBA 3");
        }
        
    });
    
});
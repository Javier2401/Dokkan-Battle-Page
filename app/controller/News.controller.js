sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    return Controller.extend("DokkanProject.controller.News", {

        onInit: function() {
            console.log("Bienvenido a la pagina 'News'");
        },

        onCambiarPantallaNewsDetails: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("News-Details");
        }

    });

});
sap.ui.define([
    "DokkanProject/utils/Utils",    
    "sap/ui/core/mvc/Controller"
], function (Utils, Controller) {
    "use strict";

    return Controller.extend("DokkanProject.controller.newsController.News", {

        onInit: function() {
            console.log("Bienvenido a la pagina 'News'");
        },

        onCambiarPantallaNewsDetails: function() {
            Utils.browseTo(this, "News-Details")
        }

    });

});
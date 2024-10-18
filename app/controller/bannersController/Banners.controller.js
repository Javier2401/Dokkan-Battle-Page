sap.ui.define([
    "DokkanProject/utils/Utils",
    "sap/ui/core/mvc/Controller"
], function(Utils,Controller) {

    return Controller.extend("DokkanProject.controller.bannersController.Banners", {

        onInit: function() {
            console.log("Bienvenido a la pagina 'Banners'");
        },

        onCambiarPantallaBannersDetails: function() {
            Utils.browseTo(this, "Banners-Details")
        }
    });

});


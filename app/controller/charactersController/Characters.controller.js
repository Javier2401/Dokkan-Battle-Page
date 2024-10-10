sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    return Controller.extend("DokkanProject.controller.charactersController.Characters", {

        onInit: function() {
            console.log("Bienvenido a la pagina 'Characters'");
        }

    });

});
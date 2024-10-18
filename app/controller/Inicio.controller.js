sap.ui.define([
    "DokkanProject/utils/Utils",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], function (Utils, Controller, MessageToast) {
    "use strict";

    return Controller.extend("DokkanProject.controller.Inicio", {

        onInit: function() {
            
        },

        onCambiarPantallaBanners: function() {
            Utils.browseTo(this, "Banners")
        },

        onCambiarPantallaCharacters: function() {
            Utils.browseTo(this, "Characters")
        },

        onCambiarPantallaCharacterDetails: function() {
            Utils.browseTo(this, "Characters-Details");
        },

        onCambiarPantallaEvents: function() {
            Utils.browseTo(this, "Events");
        },

        onCambiarPantallaItems: function() {
            Utils.browseTo(this, "Items");
        },

        onCambiarPantallaNews: function() {
            Utils.browseTo(this, "News");
        },

        onCambiarPantallaMissions: function() {
            Utils.browseTo(this, "Missions");
        },

    });
    
});
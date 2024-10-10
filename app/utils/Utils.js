sap.ui.define([], function() {
    "use strict";
    
    return {
        browseTo: function(oController, sRuta, oParametros) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(oController);
            if (oRouter) {
                oRouter.navTo(sRuta, oParametros || {}); 
            } else {
                console.error("Router not found xdddd");
            }
        },
    };
});

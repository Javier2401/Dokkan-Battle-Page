const cds = require('@sap/cds');

module.exports = (srv) => {
    
    srv.on('READ', 'Caracters', async (req) => {

        const results = await cds.run(req.query);
        return results; 
    });

};

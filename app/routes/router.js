const cors = require('cors');

module.exports = (router) => {

    router.get('/customers', cors(), (req, res) => {
        const customers = [
            { id: 1, firstName: 'Alexis', lastName: 'Grz' },
            { id: 2, firstName: 'John', lastName: 'Doe' },
            { id: 3, firstName: 'Steve', lastName: 'Smith' }
        ];

        res.json(customers);
    });

    return router; // Return the router object to server


}
module.exports = (router) => {

    router.get('/customers', (req, res) => {
        const customers = [{
            id: 1, firstNamme: 'Alexis', lastName: 'Grz',
            id: 2, firstNamme: 'John', lastName: 'Doe',
            id: 3, firstNamme: 'Steve', lastName: 'Smith',
        }];

        res.json(customers);
    });

    return router; // Return the router object to server


}
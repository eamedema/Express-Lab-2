// this is the routes file

// Import express module
const express = require('express');

// Add router for cartItems
// This lets us to split our API routes
// into separate modules (files), so its easier to use
const cartItems = express.Router();


// accept GET request at URI: /cartItems
cartItems.get('/', (req, res) => {
    console.log('test');
    console.log(req.body);
res.send(cartData);
});
// accept POST request at URI: /cartItems
cartItems.post('/cart-items', (req, res) => {
    console.log(req.body); // <-- this is the data that has been extracted from the request
res.send(cartData);
});
// accept PUT request at URI: /cartItems
cartItems.put('/cart-items/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body); // <-- this is the data that has been extracted from the request
res.send('Updating cartItems..');
});
// accept DELETE request at URI: /cartItems
cartItems.delete('/cart-items/:id', (req, res) => {
    console.log(req.body); // <-- this is the data that has been extracted from the request
res.send('Deleting cartItems..');
});

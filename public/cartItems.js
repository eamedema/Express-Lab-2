// this is the routes file

// Import express module
const express = require('express');

// Add router for cartItems
// This lets us to split our API routes
// into separate modules (files), so its easier to use
const cartItems = express.Router();


// accept GET request at URI: /cartItems
cartItems.get('/', (req, res) => {
    pool.query("SELECT * FROM ShoppingCart;")
    .then ( (results) => {
        res.send(results.rows);
    })
});

// accept POST request at URI: /cartItems
cartItems.post('/cart-items', (req, res) => {
    let data = req.body;
    pool.query("INSERT INTO ShoppingCart (product, price, quantity, image) values($1::text, $2::float, $3::int, $4::text)",[data.product, data.price, data.quantity, data.image])
    .then( () => {
        res.send(data.body);
    })
});

// accept PUT request at URI: /cartItems
cartItems.put("/:id", (req, res) => {
    pool.query("UPDATE ShoppingCart SET quantity=$1::int WHERE id=$2::int", [req.body.quantity, req.body.id])
    .then( () => {
        res.send("Item Updated");
    })
});
// accept DELETE request at URI: /cartItems
cartItems.delete("/:id", (req, res) => {
    pool.query("DELETE FROM ShoppingCart WHERE id=$1::int", [req.params.id])
    .then( () => {
        res.status(201);
        res.send("Item Deleted");
    })
});

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const pg = require("pg");
const pool = new pg.Pool({
    user: "postgres",
    password: "mo5n2key",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});

app.post("/cart-items", (req, res) => {
    let data = req.body;
    pool.query("INSERT INTO ShoppingCart (product, price, quantity, image) values($1::text, $2::float, $3::int, $4::text)",[data.product, data.price, data.quantity, data.image])
    .then( () => {
        res.send(data.body);
    })
});

app.put("/cart-items/:id", (req, res) => {
    pool.query("UPDATE ShoppingCart SET quantity=$1::int WHERE id=$2::int", [req.body.quantity, req.body.id])
    .then( () => {
        res.send("Item Updated");
    })
});;

app.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM ShoppingCart;")
    .then ( (results) => {
        res.send(results.rows);
    })
});

app.delete('/cart-items/:id', (req, res) =>{
    pool.query("DELETE FROM ShoppingCart WHERE id=$1::int", [req.params.id])
    .then( () => {
        res.status(201);
        res.send("Item Deleted");
    })
});

app.listen(4000, () => {
    console.log("JSON Server is running on 4000"); // localhost:4000/shoppingcart
});
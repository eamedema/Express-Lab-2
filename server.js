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
    let data = req.body[0];
    let id = data.id;
    console.log(data);

    pool.query(
        "INSERT INTO shoppingcart (id, product, price, quantity) values($1::int, $2::text, $3::int, $4::int)", 
        [data.id, data.product, data.price, data.quantity]
    )
    .then( () => {
        res.status(201); // Created
        res.send('Successfully added item!');
    })
  });

app.put("/cart-items/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;

    // req.params, req.body, req.query
    let name = data.name;
});

app.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM shoppingcart;")
    .then( (result) => {
        res.send(result.rows);
    })
  });

app.delete('/cart-items/:id', (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id = $1::int", [req.params.id])
    .then( () => {
        res.status(202);
        res.send("Successfully deleted item");
    })
});

app.listen(4000, () => {
    console.log("JSON Server is running on 4000"); // localhost:4000/shoppingcart
});
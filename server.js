const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("/public"));

const pg = require("pg");
const pool = new pg.Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});


app.post("/cart-items", (req, res) => {
    let data = req.body[0];
    let id = data.id;

    pool.query(
        "INSERT INTO shoppingcart (id, product, price, quantity) values($1::int, $2::text, $3::int, $4::int)", 
        [data.id, data.product, data.price, data.quantity]
    )
    .then( () => {
        res.status(201); 
        res.send('Successfully added item!');
    })
  });

app.put("/cart-items/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;

    let name = data.name;
});

app.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM shoppingcart;")
    .then( (result) => {
        res.send(result.rows);
    })
  });

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("JSON Server is running on 4000");
});
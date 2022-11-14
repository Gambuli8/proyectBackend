let express = require("express");
const PORT = 8080;
let productos = require("./products.txt");
let app = express();

app.get("/", (req, res, next) => {
    res.send(`<h1 style="color:blue"> Bienvenido </h1>`)
});
app.get("/products", (req, res, next) => {
    res.send(`productos ${productos}`);
});
app.get("/productoRandom", (req, res, next) => {
    res.send(`el producto al azar es ${productos}`)
});

app.listen(PORT, () => console.log(`server on http://localhost:${PORT}`) );
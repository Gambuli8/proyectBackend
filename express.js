let express = require("express");
const PORT = 3001;
let app = express();

let visitas = 0;

app.get("/", (req, res, next) => {
    res.send(`<h1 style="color:blue"> Bienvenido </h1>`)
});
app.get("/visitas", (req, res, next) => {
    visitas++;
    res.send(`total visitas ${visitas}`);
});
app.get("/fyh", (req, res, next) => {
    let hora = moment().format("L");
    res.send(`hola estoy en el metodo ${req.method}`)
});

app.listen(PORT, () => console.log(`server on http://localhost:${PORT}`) );
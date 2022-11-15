let express = require('express');
const PORT = 8080;
let app = express();
let serverRoutes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

serverRoutes(app);

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));

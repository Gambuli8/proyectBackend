let mascotaApi = require("../components/mascotas");
let personasApi = require("../components/personas");

module.exports = app =>{
    mascotaApi(app);
    personasApi(app);
    app.get('/', (req, res, next) => {
        res.send('ok')
    })
};

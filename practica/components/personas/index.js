let { Router } = require("express");
let router = new Router();

module.exports = app =>{
    let_arr = [
        {
            nombre: 'gero',
            edad: 20,
        },
        {
            nombre: 'viki',
            edad: 19,
        },
        {
            nombre: 'agustin',
            edad: 20,
        },
    ]
    let_arr = ['jeremias', 'fernando', 'flavia', 'francisco', 'agustin'];
    app.use('/personas', router);
    router.get('/', (req, res, next) => {
        res.json({personas:_arr});
    })

    router.post('/personas', (req, res, next) => {
        let_obj = req.body;
        _arr.push(obj)
        res.json({personas:_arr})
    })
}
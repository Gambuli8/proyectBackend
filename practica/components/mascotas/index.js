let { Router } = require("express");
let router = new Router();

module.exports = app =>{
    let_arr = [
        {
            nombre: 'roco',
            raza: 'labrador',
            edad: 9,
        },
        {
            nombre: 'thelma',
            raza: 'chihuahua',
            edad: 4,
        },
        {
            nombre: 'dora',
            raza: 'chihuahua',
            edad: 2,
        },
    ]

    app.use('/mascotas', router);
    router.get('/', (req, res, next) => {
        res.json({mascotas:_arr});
    })

    router.post('/mascotas', (req, res, next) => {
        let_obj = req.body;
        _arr.push(obj)
        res.json({mascotas:_arr})
    })
}
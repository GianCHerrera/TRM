const { Router } = require('express');
const history =require('./history')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// aqui se coloca los middlewares que redireccionan hacia las rutas correctas
//router.use('/auth',users)
//router.use('/prediction', prediction)
router.use('/history', history)


module.exports = router;

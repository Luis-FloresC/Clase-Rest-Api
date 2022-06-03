const express = require('express');
const router = express.Router();

const categoriesRoutes = require('./categorias');
const userRoutes = require('./usuarios');
const ingresosRoutes = require('./ingresos');

router.use('/categories', categoriesRoutes);
router.use('/users', userRoutes);
router.use('/ingresos', ingresosRoutes);

module.exports = router;

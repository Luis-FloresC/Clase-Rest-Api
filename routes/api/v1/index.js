const express = require('express');
const router = express.Router();

const categoriesRoutes = require('./categorias');
const userRoutes = require('./usuarios');
router.use('/categories', categoriesRoutes);
router.use('/users', userRoutes);
module.exports = router;

var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const detalleProductoController = require('../controllers/detalleProductoController');

/* GET home page. */
router.get('/', indexController);
router.get('/producto',detalleProductoController);

module.exports = router;
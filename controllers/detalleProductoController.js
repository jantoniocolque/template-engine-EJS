const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../public/data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const detalleProducto= function(req, res, next) 
{   
    console.log(products);
    res.render('detalleproducto',{ 'productos': products } );
  };

module.exports = detalleProducto ;
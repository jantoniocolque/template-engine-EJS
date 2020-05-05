const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../public/data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const index= function(req, res, next) {
    res.render('index', { title: 'Express', 'productos': products });
  };

module.exports = index ;
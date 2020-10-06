var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");


/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, "../products.json"), (err, data) => {
    res.render('index', { title: 'This is a Store', products: JSON.parse(data) });
  });
});

router.get("/products", (req, res, next) => {
  fs.readFile(path.join(__dirname, "../products.json"), (err, data) => {
    res.json(JSON.parse(data));
  });
});

module.exports = router;

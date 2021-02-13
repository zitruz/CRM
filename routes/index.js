'use Strict'

const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventacontroller')


router.get('/', (req, res) => {
    res.render("index");

});


module.exports = router
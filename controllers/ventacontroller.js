'use Strict'

const Venta = require('../models/venta')

function saveventa (req, res) {
    let venta = new Venta()
    
    venta.save((err, ventaStored) => {
      if (err)res.status(500).send({ message: `error al salvar ${err}` })
      res.status(200).send({ doctor: ventaStored })
    })
  }

  function getventa (req, res) {
    Venta.findOne({ id: req.body.id }, (err, venta) => {
      if (err) return res.status(500).send({ message: `error al realizar la peticion ${err}` })
      if (!doctor) return res.status(404).send({ message: `no existe` })
      res.status(200).send(doctor)
    })
  }

  function getventas() {
    let promise = new Promise((resolve, reject) => {
        Venta.find({})
            .then(venta => {
                if (!venta.length) {
                    resolve("no existe")
                } else {
                    resolve(venta);
                }

            })
            .catch(err => {
                reject(err);
            })
    });
    return promise;
}

function getMontoCotizaciones() {
    let promise = new Promise((resolve, reject) => {
        Venta.find({})
            .then(venta => {
                if (!venta.length) {
                    resolve("no existe")
                } else {
                    const output = venta.map(cot => cot.COGSPotencial)
                    resolve(output);
                }

            })
            .catch(err => {
                reject(err);
            })
    });
    return promise;
}

  module.exports = {
    saveventa,
    getventa,
    getventas,
    getMontoCotizaciones
  }
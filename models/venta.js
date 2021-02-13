'use Strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema = new Schema({
    Numeropropuesta: { type : Number, required : true, unique: true },
    nombre: { type : String, required : true },
    AR1: String,
    AR2: String,
    estatus: Number,
    funnelStatus: String,
    solucionDigital: String,
    cuentaPresupuesto: Number,
    tenemossolucion: Number,
    tenemosprecio:Number,
    timeok: Number,
    empresaAsignada: Number,
    envioCotizacion: Number,
    fechaeviocotizacion: Number,
    mesEnvio: Number,
    anoEnvio: Number,
    montocotpesos: Number,
    moneda: String,
    COGS: Number,
    PO: Number,
    fechaOrden: Number,
    mesOrden: String,
    anoOrden: Number,
    montoOrden: Number,
    COGSReal: Number,
});

module.exports = mongoose.model('Venta', VentaSchema)
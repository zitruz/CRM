'use Strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CrmSchema = new Schema({
    numeroCliente: { type : Number, required : true, unique: true },
    Numeropropuesta: { type : String, required : true },
    contacto: { type: Number },
    puesto: Number,
    numero: Number,
    Actividad: Number,
    puntaje: Number,
    fecha: Number,
    mes: String,
    ano: Number,
    revision: Number,
});

module.exports = mongoose.model('Crm', CrmSchema)
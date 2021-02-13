'use Strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    id: { type : Number, required : true, unique: true },
    razonsocial: { type : String, required : true },
    tipo: { type: Number },
    giro: String,
    naics: Number,
    rfc: String,
    calle: { type : String, required : true },
    numero: { type : String, required : true },
    ciudad: { type : String, required : true },
    cp: { type : String, required : true },
    nomcontacto: { type : String, required : true },
    PuestoContacto: { type: String, default: 0 },
    correoContacto: { type : String, required : true },
    telContacto: { type : Number, required : true },
    web: String,
    facebook: String,
});

module.exports = mongoose.model('Cliente', ClienteSchema)
const mongoose = require('mongoose');

// Definición del esquema
let participanteSchema = new mongoose.Schema({
    dorsal: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
        minlength: 1,
    },
    apellidos: {
        type: String,
        required: true,
        minlength: 1,
    },
    poblacion: {
        type: String,
        required: true,
        minlength: 1,
    },
    club: {
        type: String,
        required: true,
        minlength: 1,
    }
});

// Asociación con el modelo
let Participante = mongoose.model('participantes', participanteSchema);

module.exports = Participante;
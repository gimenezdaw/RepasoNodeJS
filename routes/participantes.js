const express = require('express');

let Participante = require(__dirname + '/../models/participante.js');
let router = express.Router();

//Rutas
router.get('/', (req, res) => {
    Participante.find().then(resultado => {
        //console.log(resultado);
        res.render('list', {
            participantes: resultado
        });
    }).catch(error => {
        res.render('list', { participantes: [] });
    })
});

router.get('/buscar', (req, res) => {
    Participante.find().then(resultado => {
        //console.log(resultado);
        res.render('find', {
            participantes: resultado
        });
    }).catch(error => {
        res.render('find', { participantes: [] });
    })
});

router.get('/show', (req, res) => {
    Participante.find().then(resultado => {
        res.render('show', {
            participantes: resultado
        });
    }).catch(error => {
        res.render('show', { participantes: [] });
    })
});

router.get('/show:id', (req, res) => {
    Participante.findById(req.params.id).then(resultado => {
        res.render('show', { participantes: resultado });

    }).catch(error => {
        res.render('show', { participantes: [] });
    });
});


module.exports = router
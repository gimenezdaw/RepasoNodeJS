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
            participante: resultado
        });
    }).catch(error => {
        res.render('show', { participante: [] });
    })
});

router.get('/show/:id', (req, res) => {
    console.log('id=' + req.params.id);
    Participante.findById(req.params.id).then(resultado => {
        if (resultado) res.render('show', { participante: resultado });
        else res.render('show', { participante: [] })

    }).catch(error => {
        res.render('show', { participante: [] });
    });
});


module.exports = router
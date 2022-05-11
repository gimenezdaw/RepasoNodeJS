const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const participantes = require(__dirname + '/routes/participantes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/carreras_populares');

let app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/', participantes);




app.listen(3000);
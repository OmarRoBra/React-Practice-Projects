const express = require('express');
const router= require('./rutas/index');
const rutas = require('./rutas/index');
const path = require('path')


const app = express();

app.set('view engine','pug');

app.set('views',path.join(__dirname,'./views'));

app.use('/',rutas())

app.listen(3000)
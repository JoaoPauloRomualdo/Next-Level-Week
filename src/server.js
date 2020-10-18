const express = require('express');
const path = require('path')
const server = express();
const pages = require('./pages')

//utilizando os arquivos estaticos
    server.use(express.static('public'))
//utilizar req do body
    server.use(express.urlencoded({ extended: true }))
//configurando a template engine
    server.set('views',path.join(__dirname, 'views'))
    server.set('view engine', 'hbs')

// ==> ROTAS <==
    server.get('/', pages.index)
    server.get('/orphanage', pages.orphanage)
    server.get('/orphanages', pages.orphanages)
    server.get('/create-orphanage', pages.createOrphanage)
    server.post('/save-orphanage', pages.saveOrphanage)


server.listen(3000)
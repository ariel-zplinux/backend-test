const koa = require('koa');
const router = require('koa-router')();

const jsonInput = require('./assets/json/headtohead.json');
const { 
    viewAllPlayers,
    viewPlayerById
} = require('./tasks.js');

const app = new koa();

router.get('/players', viewAllPlayers);

router.get('/players/:id', viewPlayerById);

app.use(router.routes()); 

if (!module.parent) app.listen(3000);

module.exports = app;

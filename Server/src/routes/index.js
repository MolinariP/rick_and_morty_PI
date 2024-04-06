const express = require('express');
const myRouter = express.Router();

const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')


myRouter.get('/character/:id', getCharById);
myRouter.get('/login', login);
myRouter.post('/login', postUser);
myRouter.post('/fav', postFav);
myRouter.delete('/fav/:id', deleteFav);

module.exports = myRouter;
const animeRouter = require('express').Router();
const controller = require('../controllers/anime');
const multer = require('multer');
const {body} = require('express-validator');
const uploadFoto = multer({dest: 'uploads/'}).fields([
    {name: 'foto', maxCount: 1}
]);

animeRouter.post('/inserir',
    uploadFoto,
    body('nome').isString(),
    controller.inserir
);

module.exports = animeRouter;
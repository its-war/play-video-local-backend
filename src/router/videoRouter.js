const videoRouter = require('express').Router();
const controller = require('../controllers/video');
const multer = require('multer');
const {body} = require('express-validator');
const uploadVideos = multer({dest: 'uploads/'})

videoRouter.get('/listar', controller.listar);
videoRouter.post('/upload', uploadVideos.array('videos'), controller.upload);
videoRouter.delete('/apagar',
    body('arquivo').isString().notEmpty(),
    controller.apagar
);
videoRouter.put('/renomear',
    body('nomeArquivo').isString().notEmpty(),
    body('novoNome').isString().notEmpty(),
    controller.renomear
);

module.exports = videoRouter;
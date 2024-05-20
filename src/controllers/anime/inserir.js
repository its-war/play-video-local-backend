const {matchedData, validationResult} = require('express-validator');
const sharp = require('sharp');
const fs = require('fs');
const salvar = require('../../model/anime/salvar');
module.exports = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        let nomeAnime = matchedData(req).nome;
        try {
            const tempPath = req.files.path;
            const dimensoes = {width: 900, height: 1280};
            const novoNome = `anime-foto-${Date.now()}-${Math.floor(Math.random() * 10000000000000)}.jpg`;
            const destino = 'public/img/anime/' + novoNome;

            const newImg = sharp(tempPath)
                .resize(dimensoes.width, dimensoes.height)
                .toFormat('jpeg')
                .toFile(destino)
                .then(() => {
                    sharp.cache(false);
                });

            await Promise.all([newImg]).then(async () => {
                fs.unlinkSync(tempPath);
                let idAnime = await salvar(nomeAnime, novoNome);
                return res.send({cadastro: true, anime: {idAnime: idAnime, nome: nomeAnime, foto: novoNome}});
            });
        } catch {
            return res.send();
        }
    } else {
        return res.send();
    }
}
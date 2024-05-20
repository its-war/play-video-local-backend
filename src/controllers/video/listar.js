const mime = require('mime');
const fs = require('fs');
const path = require('path');
module.exports = async (req, res) => {
    try {
        const pasta = 'public/animes';
        const ext = 'video/mp4';

        const videos = [];

        fs.readdir(pasta, (err, arquivos) => {
            if(err){
                console.error('Erro ao listar arquivos');
                return res.send({arquivos: []});
            }

            arquivos.forEach((arquivo) => {
                const caminhoCompleto = path.join(pasta, arquivo);

                if(mime.getType(caminhoCompleto) === ext){
                    videos.push(arquivo);
                }
            });

            return res.send({arquivos: videos});
        });
    } catch {
        return res.send();
    }
}
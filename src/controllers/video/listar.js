const mime = require('mime');
const fs = require('fs');
const path = require('path');
module.exports = async (req, res) => {
    try {
        const pasta = `public/${process.env.DIRETORIO_VIDEOS}`;
        const ext = 'video/mp4';

        const videos = [];

        fs.readdir(pasta, async (err, arquivos) => {
            if(err){
                console.error('Erro ao listar arquivos');
                return res.send({arquivos: []});
            }

            for(const arquivo of arquivos){
                const caminhoCompleto = path.join(pasta, arquivo);

                if(mime.getType(caminhoCompleto) === ext){
                    try{
                        const stats = await fs.promises.stat(caminhoCompleto);
                        videos.push({
                            name: arquivo,
                            size: stats.size,
                            lastModified: stats.mtime.toISOString().slice(0, 10)
                        });
                    }catch (e) {
                        console.error(e);
                    }
                }
            }

            return res.send({arquivos: videos});
        });
    } catch {
        return res.send();
    }
}
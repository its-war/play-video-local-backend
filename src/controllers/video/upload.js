const fs = require('fs');
const path = require('path');
module.exports = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).send({upload: false});
        }

        const destino = `public/${process.env.DIRETORIO_VIDEOS}`;

        req.files.forEach((file) => {
            const caminhoCompleto = path.join(destino, file.originalname);
            fs.renameSync(file.path, caminhoCompleto);
        });
        return res.send({upload: true});
    } catch(e) {
        return res.send({upload: false});
    }
}
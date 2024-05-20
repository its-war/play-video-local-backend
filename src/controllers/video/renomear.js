const {matchedData, validationResult} = require('express-validator');
const path = require('path');
const fs = require('fs');
module.exports = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            const nomeArquivo = matchedData(req).nomeArquivo;
            const novoNome = matchedData(req).novoNome + path.extname(nomeArquivo);
            const caminhoCompleto = path.join(`public/${process.env.DIRETORIO_VIDEOS}`, nomeArquivo);
            const novoCaminhoCompleto = path.join(`public/${process.env.DIRETORIO_VIDEOS}`, novoNome);

            if(fs.existsSync(caminhoCompleto)){
                fs.rename(caminhoCompleto, novoCaminhoCompleto, (err) => {
                    if (err) {
                        return res.send({renomear: false});
                    } else {
                        return res.send({renomear: true});
                    }
                });
            }else{
                return res.send({renomear: false});
            }
        } catch {
            return res.send({renomear: false});
        }
    } else {
        return res.send({renomear: false});
    }
}
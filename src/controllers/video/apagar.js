const {matchedData, validationResult} = require('express-validator');
const path = require('path');
const fs = require('fs');
module.exports = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        let arquivo = matchedData(req).arquivo;
        try {
            const caminho = path.join('public/animes', arquivo);
            if(fs.existsSync(caminho)){
                fs.unlinkSync(caminho);
                return res.send({apagar: true});
            }else{
                return res.send({apagar: false});
            }
        } catch(e) {
            console.error(e);
            return res.send({apagar: false});
        }
    } else {
        return res.send({apagar: false});
    }
}
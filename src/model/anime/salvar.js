const conn = require('../../config/database');
module.exports = async (nome, foto) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO animes (nome, foto) VALUES (?, ?)', [nome, foto], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result.insertId);
            }
        });
    });
}
const db = require('../config/orm/database').db;

const STATUS = require('../entities/enums/statusMessage')


module.exports = class ScoreRepository {
    constructor() {

    }

    async getScore(score) {
        const sqlStatement = `SELECT * FROM score where username LIKE "%" || ? || "%" LIMIT 1;`
        const params = [score.username]
        return new Promise((resolve, reject ) => {
            db.get(sqlStatement, params, (err, result) => {
                if (err) {
                    return STATUS.ERROR;
                }
                resolve(result)
            });
        });
    }

    async saveScore(score) {
        return new Promise((resolve, reject ) => {
            db.run(
                `UPDATE score set value = ? WHERE username = ?`,
                [score.value, score.username],
                function (err, result) {
                    if (err) {
                        return STATUS.ERROR;
                    }
                    resolve(result)
                });
        });
        
    }

    log() {
        console.log("ClassName :" + ScoreRepository.name)
    }
      
}
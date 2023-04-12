const db = require('../config/orm/database').db;


const STATUS = require('../entities/enums/statusMessage')

module.exports = class PlayerRepository {
    constructor() {

    }

    async registerPlayer(player) {
        const sqlStatement = `INSERT INTO score VALUES(?, ?, ?, ?);`
        const {id, username, value, date} = player
        const params = [id, username, value, date]
        return new Promise((resolve, reject ) => {
            db.get(sqlStatement, params, (err, result) => {
                if (err) {
                    return STATUS.ERROR;
                }
                resolve(result)
            });
        });
    }

    log() {
        console.log("ClassName :" + PlayerRepository.name)
    }
      
}
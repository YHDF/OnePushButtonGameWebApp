const db = require('../config/orm/database').db;


const STATUS = require('../entities/enums/statusMessage')

module.exports = class PlayerRepository {
    constructor() {

    }

    async registerPlayer(player) {
        console.log(player)
        const sqlStatement = `INSERT INTO score VALUES(?, ?, ?, ?);`
        const {id, playerUsername, value, datePartie} = player
        const params = [id, playerUsername, value, datePartie]
        return new Promise((resolve, reject ) => {
            db.get(sqlStatement, params, (err, result) => {
                if (err) {
                    return STATUS.ERROR;
                }
                resolve(result)
            });
        });
    }

    toString() {
        console.log("ClassName :" + PlayerRepository.name)
    }
      
}
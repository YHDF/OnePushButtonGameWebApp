var sqlite3 = require('sqlite3').verbose()


const DBSOURCE = "./database/OPBG.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')

    }
});

const createDB = () => {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS score (id TEXT, username TEXT, value INTEGER, date TEXT)')
    });
}


module.exports = {
    db : db,
    createDB : createDB
}
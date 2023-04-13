const express = require('express');
const fs = require('fs');
const debug = require('debug');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const gameFolderPath = path.join(__dirname, 'public', 'OPBG-build');
console.log(gameFolderPath)



const server = require('./bin/www');
const db = require('./config/orm/database').db;
const createDB = require('./config/orm/database').createDB();

const bootstrapAssets = require('./config/bootstrap/assetConfig')
const bootstrapRoutes = require('./config/bootstrap/routeConfig')
const bootstrapErrors = require('./config/bootstrap/errorConfig')

const app = express();

app.use('/play', expressStaticGzip(gameFolderPath, {
  enableBrotli: false,
  orderPreference: ['br']
}));

const DB_PATH = 'database/OPBG.db'

bootstrapAssets(app)
bootstrapRoutes(app)
bootstrapErrors(app)


process.on('SIGINT', () => processAction('SIGINT'))
process.on('SIGQUIT', () => processAction('SIGQUIT'))
process.on('SIGTERM', () => processAction('SIGTERM'))


const processAction = (action) => {
  db.close()
  fs.unlinkSync(path.resolve(__dirname, DB_PATH));
  debug(`${action} signal received: closing HTTP server`)
  server.close(() => {
    debug('HTTP server closed')
  })
}


module.exports = app;

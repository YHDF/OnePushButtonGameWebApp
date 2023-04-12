const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bootstrapAssets = (app) => {
    // view engine setup
    app.set('views', path.join(__dirname, '../../views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../../public')));

}

module.exports = bootstrapAssets
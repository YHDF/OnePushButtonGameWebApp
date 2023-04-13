const express = require('express');
const gameRouter = express.Router();
const path = require('path');
const fs = require('fs');

const STATUS = require('../entities/enums/statusMessage')


const gamePath = path.join(__dirname, '..', 'public', 'game', 'executables', 'OBAA.rar');

const downloadGame = (req, res, next) => {
    const words = gamePath.split('/');
    const filename = words[words.length - 1];
    res.setHeader('Content-disposition', 'attachment; filename='+filename);
    //filename is the name which client will see. Don't put full path here.

    res.setHeader('Content-type', 'application/x-msdownload');      //for exe file
    res.setHeader('Content-type', 'application/x-rar-compressed');  //for rar file

    var file = fs.createReadStream(gamePath);
    //replace filepath with path of file to send
    file.pipe(res);
    //send file
}

gameRouter.get('/download', downloadGame);


module.exports = gameRouter


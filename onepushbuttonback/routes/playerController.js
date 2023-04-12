const express = require('express');
const playerRouter = express.Router();

const STATUS = require('../entities/enums/statusMessage')

const registerPlayer = require("../services/player/playerService").registerPlayer

const upsertPlayer = (req, res, next) => {
    const player = JSON.parse(JSON.stringify(req.body));
    registerPlayer(player).then((value) => {
        if (value === STATUS.ERROR) {
            res.status(400).json({ "error": STATUS.ERROR });
        } else if (!value) {
            res.json({
                "message": STATUS.EMPTY,
                "data": null
            })
        } else {
            res.json({
                "message": STATUS.SUCCESS,
                "data": value
            })
        }
    });
}

playerRouter.post('/player/upsert', upsertPlayer);


module.exports = playerRouter


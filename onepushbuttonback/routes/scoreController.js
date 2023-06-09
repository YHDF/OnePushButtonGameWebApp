const express = require('express');
const scoreRouter = express.Router();

const STATUS = require('../entities/enums/statusMessage')

const saveHighestScore = require("../services/score/scoreService").saveHighestScore
const getHighestScores = require("../services/score/scoreService").getHighestScores

const upsertScore = (req, res, next) => {
    const score = JSON.parse(JSON.stringify(req.body));
    saveHighestScore(score).then((value) => {
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

const getTopScores = (req, res, next) => {
    const limit = req.params['limit']
    getHighestScores(limit).then((value) => {
        console.log("values")
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


scoreRouter.patch('/score/upsert', upsertScore);
scoreRouter.get('/top/:limit', getTopScores);

module.exports = scoreRouter


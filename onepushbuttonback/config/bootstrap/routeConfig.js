const indexRouter = require('../../routes/index');

const scoreRouter = require('../../routes/scoreController');
const playerRouter = require('../../routes/playerController');
const gameRouter = require('../../routes/gameController');



const bootstrapRoutes = (app) => {
    app.use('/', indexRouter);
    app.use('/scores',scoreRouter)
    app.use('/players',playerRouter)
    app.use('/game',gameRouter)
}

module.exports = bootstrapRoutes
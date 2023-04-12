const PlayerRepository = require('../../repository/playerRepository');

const randomUUID = require("../../utils/identityGenerator");
const Score = require("../../entities/score")
/**
 * Enregistre un nouveau joueur en passant l'objet joueur au PlayerRepository.
 *
 * @async
 * @function
 * @param {Object} player - L'objet joueur contenant les données nécessaires du joueur.
 * @param {string} player.username - Le nom d'utilisateur du joueur.
 * @param {number} player.score - Le score du joueur.
 * @returns {Promise<Object>} Une promesse qui résout l'objet joueur enregistré.
 */

const registerPlayer = async (player) => {
    const playerObject = new PlayerRepository();
    const score = new Score();
    score.setId(randomUUID())
    score.setPlayerUsername(player.username)
    score.setValue("")
    score.setDatePartie(new Date().toISOString().split('T')[0])
    return await playerObject.registerPlayer(score)
}


module.exports = {
    registerPlayer: registerPlayer
}
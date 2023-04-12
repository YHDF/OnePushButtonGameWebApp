const PlayerRepository = require('../../repository/playerRepository');

const randomUUID = require("../../utils/identityGenerator");

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
    return await playerObject.registerPlayer(player)
}


module.exports = {
    registerPlayer: registerPlayer
}
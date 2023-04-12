const scoreRepository = require('../../repository/scoreRepository');

const STATUS = require('../../entities/enums/statusMessage')


/**
 * Enregistre le score le plus élevé en passant l'objet score au scoreRepository.
 *
 * @async
 * @function
 * @param {Object} score - L'objet score contenant les données du score.
 * @param {string} score.id - L'identifiant unique du score.
 * @param {number} score.value - La valeur du score.
 * @returns {Promise<Object>} Une promesse qui résout l'objet score enregistré si le score est plus élevé que le précédent, sinon retourne le score précédent.
 */
const saveHighestScore = async (score) => {

    const scoreObject = new scoreRepository();
    return await scoreObject.getScore(score).then((v) => {
        if(v === STATUS.ERROR){
            return v
        }
        if (v?.value < parseInt(score.value)) {
            scoreObject.saveScore(score);
        }
        return v
    })
}


module.exports = {
    saveHighestScore: saveHighestScore
}
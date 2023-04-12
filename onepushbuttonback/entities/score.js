/**
 * Classe représentant un score.
 */
class Score {
    /**
     * Crée un nouvel objet Score.
     * 
     * @constructor
     * @param {string} id - L'identifiant unique du score.
     * @param {string} playerUsername - Le nom d'utilisateur du joueur.
     * @param {number} value - La valeur du score.
     * @param {Date} datePartie - La date de la partie.
     */
    constructor(id, playerUsername, value, datePartie) {
        this.id = id;
        this.playerUsername = playerUsername;
        this.value = value;
        this.datePartie = datePartie;
    }

    // Getters
    getId() {
        return this.id;
    }

    getPlayerUsername() {
        return this.playerUsername;
    }

    getValue() {
        return this.value;
    }

    getDatePartie() {
        return this.datePartie;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setPlayerUsername(playerUsername) {
        this.playerUsername = playerUsername;
    }

    setValue(value) {
        this.value = value;
    }

    setDatePartie(datePartie) {
        this.datePartie = datePartie;
    }
}

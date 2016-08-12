package meli.musify.canonic

/**
 * Es un client de la compañia Musify Inc.
 */
class User {

    String login

    static constraints = {
        login unique: true, email: true
    }

}

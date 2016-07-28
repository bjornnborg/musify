package meli.musify.canonic

class User {

    String login

    static constraints = {
        login unique: true, email: true
    }

}

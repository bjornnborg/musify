package meli.musify.producer.controller

import meli.musify.canonic.User

class UserRestController {

    static responseFormats = ["json", "xml"]

    def userService

    def index() {
        respond userService.all(), status: 200
    }

    def save(User user) {
        if (!user.hasErrors()) {
            def newUser = userService.create(user)
            respond newUser, status: 201
        } else {
            respond status: 422
        }
    }
}

package meli.musify.producer.controller

import meli.musify.canonic.User
import org.springframework.http.HttpStatus

class UserRestController {

    static responseFormats = ["json", "xml"]

    def userService

    def index() {
        respond userService.all(), status: HttpStatus.OK.value()
    }

    def save(User user) {
        if (!user.hasErrors()) {
            def newUser = userService.create(user)
            respond newUser, status: HttpStatus.CREATED.value()
        } else {
            respond status: HttpStatus.UNPROCESSABLE_ENTITY.value()
        }
    }
}

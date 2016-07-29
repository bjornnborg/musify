package meli.musify.producer.service

import grails.transaction.Transactional
import meli.musify.canonic.User

@Transactional
class UserService {

    def create(User user) {
        user.save(true)
    }

    def all() {
        User.list(sort: "login")
    }
}

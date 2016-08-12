package meli.musify.producer.service

import grails.transaction.Transactional
import meli.musify.canonic.User

/**
 * Los usuarios se escriben y se leen de MySQL.
 * Objetos de dominio se mantienen en una base de datos relacional.
 */
@Transactional
class UserService {

    def create(User user) {
        user.save(true)
    }

    def all() {
        User.list(sort: "login")
    }
}

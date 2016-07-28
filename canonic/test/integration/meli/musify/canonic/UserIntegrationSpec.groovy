package meli.musify.canonic

import grails.test.spock.IntegrationSpec

class UserIntegrationSpec extends IntegrationSpec {

    def setup() {
    }

    def cleanup() {
    }

    void "must validate login as an email"() {
        given: "A new user"
            def user = new User(login: "not-an-email")

        when: "the user is saved"
            user.save()

        then: "it must generate validation error"
            user.hasErrors()
            "email.invalid" ==  user.errors.getFieldError("login").code
    }
}

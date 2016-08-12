package meli.musify.canonic.exception

/**
 * Errores de infraestructura
 */
class InfrastructureException extends RuntimeException {

    def InfrastructureException(msg, cause) {
        super(msg, cause)
    }
}

import meli.musify.canonic.Song
import meli.musify.canonic.User;

class BootStrap {

    def userService
    def songService

    def init = { servletContext ->
        def user = new User()
        user.login = "bjornnborg@gmail.com"
        userService.create(user)

        def bad = new Song()
        bad.name = "Bad"
        bad.singer = "Michael Jackson"
        bad.album = "MJ Greatest Hits"
        songService.create(bad)

        def grenade = new Song()
        grenade.name = "Grenade"
        grenade.album = "BM Greatest Hits"
        grenade.singer = "Bruno Mars"
        songService.create(grenade)

    }
    def destroy = {
    }
}

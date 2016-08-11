angular.module("musify", [])
    .controller("playerCtrl", ['$scope', '$interval', '$http', function($scope, $interval, $http){
        $scope.heartbeatInterval = 5000;
        $scope.playingSong;
        $scope.intervalPromise;
        $scope.elapsedTime = 0;

        $scope.$on('playOrStopSong', function(event, song){
            if ($scope.playingSong) {
                lastPlayedSong = stopPlaying($scope.playingSong)
                if (song != lastPlayedSong) {
                    play(song)
                }
            } else {
                play(song)
            }
        })

        var play = function(song) {
            $scope.playingSong = song
            song.playing = true
            notifyPlay(song)
        }

        var stopPlaying = function(song) {
            console.log("stop listening to %s, by %s", song.name, song.singer)
            $interval.cancel($scope.intervalPromise)
            song.playing = false;
            $scope.elapsedTime = 0;
            delete $scope.playingSong
            return song
        }

        var sendEvent = function(type, song) {
            var incrementValue = type == 'listening' ? ($scope.heartbeatInterval / 1000) : 0
            //userId hardcoded for demo purposes
            var data = {
                commandType: type,
                userId: 1,
                songId: song.id,
                atSecond: $scope.elapsedTime,
                increment: incrementValue
            }

            var config = {
                'Content-Type': 'application/json'
            }

            return $http.post('/producer/playerRest/executeCommand', data, config)

        }

        var scheduleHeartbeat = function(song) {
            $scope.intervalPromise = $interval(function(){
                $scope.elapsedTime = $scope.elapsedTime + $scope.heartbeatInterval
                sendEvent('listening', song).then(function(){
                    console.log("still listening to %s, by %s (%d)", song.name, song.singer, $scope.elapsedTime)
                });
            }, $scope.heartbeatInterval)
        }

        var notifyPlay = function(song) {
            sendEvent('play', song).then(function(response){
                console.log("starting to listen to %s, by %s", song.name, song.singer)
                scheduleHeartbeat(song)
            })
        }


    }])
    .controller("elasticCtrl", ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){
        $scope.foundSongs = []

        $scope.doElasticSearch = function(term) {
            $http.get('/producer/songRest/search?q=' + term).then(function(response){
                console.log('response')
                $scope.foundSongs = response.data.response.results
            })
        }

        $scope.firePlay = function(song) {
            $rootScope.$broadcast('playOrStopSong', song)
        }

        $scope.getLabel = function (song) {
            return song.playing == true ? "Stop" : "Play"
        }

    }])
    .controller("rankingCtrl", ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){
        $scope.playCountSongs = []
        $scope.playTimeSongs = []

        $http.get('http://localhost:8080/consumer/statisticsRest/playingStatistics').then(function(response){
            $scope.playCountRanking = response.data.playCount;
            $scope.playTimeRanking = response.data.playTime;
        })
    }])
;

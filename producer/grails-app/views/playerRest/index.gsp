<%--
  Created by IntelliJ IDEA.
  User: bborg
  Date: 09/08/16
  Time: 17:21
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <asset:javascript src="angular.min.js"/>
    <asset:javascript src="app.js"/>
    <title>Hadouken</title>
</head>

<body ng-app="musify">
<div id="song-search-container" ng-controller="elasticCtrl">
    <label for="song-search">Elastic Search something:</label>
    <input type="text" id="song-search" name="song-search" placeholder="Song, album or artist" size="40" ng-model="search.term">
    <button id="elastic-search-action" ng-click="doElasticSearch(search.term)" ng-disabled="!search.term">Go!</button>

    <ul>
        <li ng-repeat="s in foundSongs">{{s.name}} / {{s.album}} / {{s.singer}}<button ng-click="firePlay(s)">{{getLabel(s)}}</button></li>
    </ul>

</div>

<div id="songs-ranking" ng-controller="rankingCtrl" ng-show="playCountRanking.length > 0">
    <h3>Top played this month</h3>
    <ul>
        <li ng-repeat="s in playCountRanking">{{s.name}} / {{s.score}} times</li>
    </ul>
    <h3>Most time playing this month</h3>
    <ul>
        <li ng-repeat="s in playTimeRanking">{{s.name}} / {{s.score}} seconds</li>
    </ul>
</div>

<div id="player" ng-controller="playerCtrl" ng-show="playingSong">
    <div id="statusBar">
        <p>Playing {{playingSong.name}}, by {{playingSong.singer}}</p>
    </div>
</div>


</body>
</html>
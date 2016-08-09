var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var accountUniquenessController = {
        ping: function(request, response) {
                  response.writeHead(200, {
                      'Content-Type' : 'application/json; charset=utf-8'
                  });
                  response.write(JSON.stringify(["pong"]));
                  response.end();
        },

        post: function(request, response) {
            response.writeHead(204, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify([]));
            response.end();
        },

        getWhitelist: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify([129273505,980474811]));
            response.end();
        },
        getEvents: function(request, response) {

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/uniqueness/users/(\\d+)/events');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            if(userId == 18753456){
              result = {
                        "user_id" : userId,
                        "device_ml" : [
                            {
                                "id" : "51cb55a8e4b0dc5b584d5e71",
                                "first_seen" : "2013-06-26T22:39:37Z",
                                "last_seen" : "2013-06-26T22:39:37Z",
                                "events" : [
                                    {
                                        "id" : "login",
                                        "date" : "2013-06-23T22:39:37Z"
                                    },{
                                        "id" : "login",
                                        "date" : "2013-06-24T22:39:37Z"
                                    },{
                                        "id" : "payment",
                                        "date" : "2013-06-26T22:39:37Z"
                                    },{
                                        "id" : "payment",
                                        "date" : "2013-06-27T22:39:37Z"
                                    },{
                                         "id": "login",
                                         "date": "2014-01-14T07: 36: 004Z",
                                         "ip": "177.132.157.193",
                                         "creation_date": null
                                    },{
                                         "id": "login",
                                         "date": "2014-01-15T07: 36: 004Z",
                                         "ip": null,
                                         "creation_date": null
                                    },{
                                         "id": "login",
                                         "date": "2014-01-16T07: 36: 004Z",
                                         "ip": "",
                                         "creation_date": null
                                    },{
                                         "id": "login",
                                         "date": "2014-01-17T07: 36: 004Z",
                                         "ip": "10.4.3.1",
                                         "creation_date": null
                                    },{
                                          "id": "login",
                                          "date": "2014-02-20T13:39:051Z",
                                          "creation_date": "2014-02-20T13:39:052Z",
                                          "ip": "177.207.116.219",
                                          "cookie_id":12345678,
                                          "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                                    },{
                                          "id": "login",
                                          "date": "2014-02-20T13:39:051Z",
                                          "creation_date": "2014-02-20T13:39:052Z",
                                          "ip": null,
                                          "cookie_id":12345678,
                                          "cookies":"{poison:null, d2id:'hojh9MZztsvFaPgPmUKLf', fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:'6CED910F90'}"
                                    },{
                                          "id": "login",
                                          "date": "2014-02-14T07:50:048Z",
                                          "creation_date": "2014-02-14T07:50:052Z",
                                          "ip": "186.212.229.71",
                                          "cookie_id":12345699,
                                          "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                                    },{
                                          "id": "login",
                                          "date": "2014-02-13T16:47:036Z",
                                          "creation_date": "2014-02-13T16:47:037Z",
                                          "ip": "186.212.230.81",
                                          "cookie_id":12345600,
                                          "cookies":"{poison:12345678, d2id:'mhhojh9MZztsvFaPgPmUKLfs-A0YJf', fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:'F2D-2DBE-4803-B66D-6CED'}"
                                    },{
                                          "id": "login",
                                          "date": "2014-02-10T10:28:047Z",
                                          "creation_date": "2014-02-10T10:28:048Z",
                                          "ip": "177.17.71.143",
                                          "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                                    },{
                                          "id": "login",
                                          "date": "2014-02-04T11:53:006Z",
                                          "creation_date": "2014-02-04T11:53:008Z",
                                          "ip": "186.212.142.160"
                                    },{
                                          "id": "login",
                                          "date": "2014-02-01T17:53:051Z",
                                          "ip": "177.19.52.235",
                                          "creation_date": null
                                    },{
                                          "id": "login",
                                          "date": "2014-02-01T14:30:028Z",
                                          "ip": "177.19.52.235",
                                          "creation_date": null
                                    },{
                                          "id": "login",
                                          "date": "2014-01-27T08:45:003Z",
                                          "ip": "177.206.242.24",
                                          "creation_date": null
                                    }
                                ]
                            },
                            {
                                "id" : "51cb6dc1e4b030611aa0309b",
                                "first_seen" : "2013-06-26T22:40:01Z",
                                "last_seen" : "2013-06-26T22:40:01Z",
                                "events" : [
                                    {
                                        "id" : "login",
                                        "date" : "2013-06-26T22:40:01Z"
                                    }
                                ]
                            }
                        ],
                        "device_thm" : [
                            {
                                "id" : "eda474638b96491fb1728e61a49e2f0b",
                                "first_seen" : "2013-06-26T04:00:00Z",
                                "last_seen" : "2013-06-26T04:00:00Z",
                                "events" : [
                                    {
                                        "id" : "payment",
                                        "date" : "2013-06-26T04:00:00Z"
                                    },
                                    {
                                        "id" : "payment",
                                        "date" : "2013-06-26T04:17:00Z"
                                    },{
                                        "id": "publish",
                                        "date": "2014-01-14T08: 03: 037Z",
                                        "ip": "177.132.157.193",
                                        "creation_date": null
                                    },{
                                        "id": "publish",
                                        "date": "2014-01-15T08: 03: 037Z",
                                        "ip": null,
                                        "creation_date": null
                                    },{
                                        "id": "publish",
                                        "date": "2014-01-16T08: 03: 037Z",
                                        "ip": "",
                                        "creation_date": null
                                    }
                                ]
                            },
                            {
                                "id" : "6800234b4d0b4b61b6b970461513983a",
                                "first_seen" : "2013-06-26T04:00:00Z",
                                "last_seen" : "2013-06-26T04:00:00Z",
                                "events" : [
                                    {
                                        "id" : "payment",
                                        "date" : "2013-06-26T04:00:00Z"
                                    }
                                ]
                            }
                        ]
                    };
            }
            else{

              result = {
                          "user_id" : userId,
                          "device_ml" : [
                              {
                                  "id" : "51cb55a8e4b0dc5b584d5e71",
                                  "first_seen" : "2013-06-26T22:39:37Z",
                                  "last_seen" : "2013-06-26T22:39:37Z",
                                  "events" : [
                                      {
                                          "id" : "login",
                                          "date" : "2013-06-23T22:39:37Z"
                                      },{
                                          "id" : "login",
                                          "date" : "2013-06-24T22:39:37Z"
                                      },{
                                          "id" : "payment",
                                          "date" : "2013-06-26T22:39:37Z"
                                      },{
                                          "id" : "payment",
                                          "date" : "2013-06-27T22:39:37Z"
                                      },{
                                           "id": "login",
                                           "date": "2014-01-14T07: 36: 004Z",
                                           "ip": "177.132.157.193",
                                           "creation_date": null
                                      },{
                                           "id": "login",
                                           "date": "2014-01-15T07: 36: 004Z",
                                           "ip": null,
                                           "creation_date": null
                                      },{
                                           "id": "login",
                                           "date": "2014-01-16T07: 36: 004Z",
                                           "ip": "",
                                           "creation_date": null
                                      },{
                                           "id": "login",
                                           "date": "2014-01-17T07: 36: 004Z",
                                           "ip": "10.4.3.1",
                                           "creation_date": null
                                      },{
                                           "id": "login",
                                           "date": "2014-01-18T07: 36: 004Z",
                                           "ip": "null",
                                           "creation_date": null
                                      },{
                                            "id": "login",
                                            "date": "2014-02-20T13:39:051Z",
                                            "creation_date": "2014-02-20T13:39:052Z",
                                            "ip": "177.207.116.219",
                                            "cookie_id":12345678,
                                            "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                                      },{
                                            "id": "login",
                                            "date": "2014-02-20T13:39:051Z",
                                            "creation_date": "2014-02-20T13:39:052Z",
                                            "ip": null,
                                            "cookie_id":12345678,
                                            "cookies":"{poison:null, d2id:'hojh9MZztsvFaPgPmUKLf', fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:'6CED910F90'}"
                                      },{
                                            "id": "login",
                                            "date": "2014-02-14T07:50:048Z",
                                            "creation_date": "2014-02-14T07:50:052Z",
                                            "ip": "186.212.229.71",
                                            "cookie_id":12345699,
                                            "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                                      },{
                                            "id": "login",
                                            "date": "2014-02-13T16:47:036Z",
                                            "creation_date": "2014-02-13T16:47:037Z",
                                            "ip": "186.212.230.81",
                                            "cookie_id":12345600,
                                            "cookies":"{poison:12345678, d2id:'mhhojh9MZztsvFaPgPmUKLfs-A0YJf', fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:'F2D-2DBE-4803-B66D-6CED'}"
                                      },{
                                            "id": "login",
                                            "date": "2014-02-10T10:28:047Z",
                                            "creation_date": "2014-02-10T10:28:048Z",
                                            "ip": "177.17.71.143",
                                            "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                                      },{
                                            "id": "login",
                                            "date": "2014-02-04T11:53:006Z",
                                            "creation_date": "2014-02-04T11:53:008Z",
                                            "ip": "186.212.142.160"
                                      },{
                                            "id": "login",
                                            "date": "2014-02-01T17:53:051Z",
                                            "ip": "177.19.52.235",
                                            "creation_date": null
                                      },{
                                            "id": "login",
                                            "date": "2014-02-01T14:30:028Z",
                                            "ip": "177.19.52.235",
                                            "creation_date": null
                                      },{
                                            "id": "login",
                                            "date": "2014-01-27T08:45:003Z",
                                            "ip": "177.206.242.24",
                                            "creation_date": null
                                      }
                                  ]
                              },
                              {
                                  "id" : "51cb6dc1e4b030611aa0309b",
                                  "first_seen" : "2013-06-26T22:40:01Z",
                                  "last_seen" : "2013-06-26T22:40:01Z",
                                  "events" : [
                                      {
                                          "id" : "login",
                                          "date" : "2013-06-26T22:40:01Z"
                                      }
                                  ]
                              }
                          ],
                          "device_thm" : [
                              {
                                  "id" : "eda474638b96491fb1728e61a49e2f0b",
                                  "first_seen" : "2013-06-26T04:00:00Z",
                                  "last_seen" : "2013-06-26T04:00:00Z",
                                  "events" : [
                                      {
                                          "id" : "payment",
                                          "date" : "2013-06-26T04:00:00Z"
                                      },
                                      {
                                          "id" : "payment",
                                          "date" : "2013-06-26T04:17:00Z"
                                      },{
                                          "id": "publish",
                                          "date": "2014-01-14T08: 03: 037Z",
                                          "ip": "177.132.157.193",
                                          "creation_date": null
                                      },{
                                          "id": "publish",
                                          "date": "2014-01-15T08: 03: 037Z",
                                          "ip": null,
                                          "creation_date": null
                                      },{
                                          "id": "publish",
                                          "date": "2014-01-16T08: 03: 037Z",
                                          "ip": "",
                                          "creation_date": null
                                      },{
                                          "id": "publish",
                                          "date": "2014-01-17T08: 03: 037Z",
                                          "ip": "null",
                                          "creation_date": null
                                      }
                                  ]
                              },
                              {
                                  "id" : "6800234b4d0b4b61b6b970461513983a",
                                  "first_seen" : "2013-06-26T04:00:00Z",
                                  "last_seen" : "2013-06-26T04:00:00Z",
                                  "events" : [
                                      {
                                          "id" : "payment",
                                          "date" : "2013-06-26T04:00:00Z"
                                      }
                                  ]
                              }
                          ]
                      };
            }

            response.write(JSON.stringify(result));
            response.end();
        },

        getDeviceMLEvents: function(request, response) {

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/uniqueness/users/(\\d+)/device_ml/events');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            result = {
                      "device_ml": [
                        {
                          "events": [
                            {
                              "id": "login",
                              "date": "2013-12-01T18:46:011Z",
                              "ip": "",
                              "creation_date": null
                            },
                            {
                              "id": "login",
                              "date": "2013-11-29T18:49:009Z",
                              "ip": "177.207.116.219",
                              "creation_date": null
                            }
                          ],
                          "first_seen": "2013-11-29T18:49:009Z",
                          "id": "529919e5e4b0bac725791081",
                          "last_seen": "2013-12-01T18:46:011Z"
                        },
                        {
                          "id": "52c5b7d5e4b05187f42e5cca",
                          "first_seen": "2014-01-02T15:02:046Z",
                          "last_seen": "2014-01-02T15:02:046Z",
                          "events": [
                            {
                              "id": "login",
                              "date": "2014-01-02T15:02:046Z",
                              "ip": null,
                              "creation_date": null
                            },
                            {
                              "cookies": {
                                  "d2id": "test_dejavu_sid"
                              },
                              "creation_date": "2014-02-21T10:47:017Z",
                              "date": "2014-02-22T01:00:000Z",
                              "id": "login",
                              "ip": null
                            },
                            {
                              "creation_date": "2014-02-20T15:21:050Z",
                              "date": "2014-02-20T01:00:000Z",
                              "id": "login",
                              "ip": "190.3.68.233"
                            },
                            {
                              "cookies": null,
                              "creation_date": "2014-02-20T15:22:055Z",
                              "date": "2014-02-20T01:00:000Z",
                              "id": "account_recovery_flow",
                              "ip": "190.3.68.233"
                            }
                          ]
                        },
                        {
                      "events": [
                            {
                              "id": "login",
                              "date": "2014-02-20T13:39:051Z",
                              "creation_date": "2014-02-20T13:39:052Z",
                              "ip": "177.207.116.219",
                              "cookie_id":12345678,
                              "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                            },
                            {
                              "id": "login",
                              "date": "2014-02-14T07:50:048Z",
                              "creation_date": "2014-02-14T07:50:052Z",
                              "ip": "186.212.229.71",
                              "cookie_id":12345699,
                              "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                            },
                            {
                              "id": "login",
                              "date": "2014-02-13T16:47:036Z",
                              "creation_date": "2014-02-13T16:47:037Z",
                              "ip": "186.212.230.81",
                              "cookie_id":12345600,
                              "cookies":"{poison:12345678, d2id:'mhhojh9MZztsvFaPgPmUKLfs-A0YJf', fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:'F2D-2DBE-4803-B66D-6CED'}"
                            },
                            {
                              "id": "login",
                              "date": "2014-02-10T10:28:047Z",
                              "creation_date": "2014-02-10T10:28:048Z",
                              "ip": "177.17.71.143",
                              "cookies":"{poison:12345678, d2id:null, fuuid:'mhhojh9MZztsvFaPgPmUKLfs-A0YJfeLPRIYfehPGw3UfOyO4-16: 12: 47GMT-0300', jsuuid:'8A621F2D-2DBE-4803-B66D-6CED910F9019-19: 58: 29GMT-0300(ART)', dsid:null}"
                            },
                            {
                              "id": "login",
                              "date": "2014-02-04T11:53:006Z",
                              "creation_date": "2014-02-04T11:53:008Z",
                              "ip": "186.212.142.160"
                            },
                            {
                              "id": "login",
                              "date": "2014-02-01T17:53:051Z",
                              "ip": "177.19.52.235",
                              "creation_date": null
                            },
                            {
                              "id": "login",
                              "date": "2014-02-01T14:30:028Z",
                              "ip": "177.19.52.235",
                              "creation_date": null
                            },
                            {
                              "id": "login",
                              "date": "2014-01-27T08:45:003Z",
                              "ip": "177.206.242.24",
                              "creation_date": null
                            },
                            {
                              "id": "login",
                              "date": "2014-01-22T08:23:003Z",
                              "ip": "177.17.71.186",
                              "creation_date": null
                            },
                            {
                              "id": "login",
                              "date": "2014-01-20T09:30:019Z",
                              "ip": "177.133.104.62",
                              "creation_date": null
                            },
                            {
                              "id": "login",
                              "date": "2014-01-18T15:57:001Z",
                              "ip": "177.17.58.87",
                              "creation_date": null
                            }
                          ],
                          "first_seen": "2014-01-18T15:57:001Z",
                          "id": "52dadc8de4b071f47b1bf031",
                          "last_seen": "2014-02-20T13:39:051Z"
                        }
                      ],
                      "user_id": userId

                    };

            response.write(JSON.stringify(result));
            response.end();
        },

        getDeviceML: function(request, response) {

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/uniqueness/users/(\\d+)/device_ml');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            result = {
                        "user_id" : userId,
                        "device_ml" : [
                            {
                                "id" : "51cb55a8e4b0dc5b584d5e71",
                                "first_seen" : "2013-06-26T22:39:37Z",
                                "last_seen" : "2013-06-26T22:39:37Z",
                            },
                            {
                                "id" : "51cb6dc1e4b030611aa0309b",
                                "first_seen" : "2013-06-26T22:40:01Z",
                                 "last_seen" : "2020-02-17T22:40:01Z",
                            }
                        ]
                    };

            if(userId == 11111){
                response.writeHead(404, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                result = {"message":"User 7325084 not found","error":"not_found","status":404,"cause":[]};
            } else if(userId == 22222){
                response.writeHead(404, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                result = {"message":"User " + userId + " doesn't have colletion of device_ml","error":"not_found","status":404,"cause":[]};
            } else if(userId == 234756999){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                result= {
                        "user_id" : userId,
                        "device_ml" : [
                            {
                                "id" : "51cb55a8e4b0dc5b584d5e98",
                                "first_seen" : "2013-06-26T22:39:37Z",
                                "last_seen" : "2013-06-26T22:39:37Z",
                            },
                            {
                                "id" : "51cb6dc1e4b030611aa03099",
                                "first_seen" : "2013-06-26T22:40:01Z",
                                 "last_seen" : "2020-02-17T22:40:01Z",
                            }
                        ]
                    };
            } else if(userId == 234756000){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                result ={
                        "user_id" : userId,
                        "device_ml" : [
                            {
                                "id" : "51cb55a8e4b0dc5b584d5e78",
                                "first_seen" : "2013-06-26T22:39:37Z",
                                "last_seen" : "2013-06-26T22:39:37Z",
                            },
                            {
                                "id" : "51cb6dc1e4b030611aa03079",
                                "first_seen" : "2013-06-26T22:40:01Z",
                                 "last_seen" : "2020-02-17T22:40:01Z",
                            }
                        ]
                    };
            } else if(userId == 32435460){
                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                result= {
                        "user_id" : userId,
                        "device_ml" : [
                            {
                                "id" : "558ed956e4b03be0d04d59aa",
                                "first_seen" : "2013-06-26T22:39:37Z",
                                "last_seen" : "2020-06-26T22:39:37Z",
                            },
                            {
                                "id" : "558ed956e4b03be0d04d59bb",
                                "first_seen" : "2013-06-26T22:40:01Z",
                                 "last_seen" : "2020-02-17T22:40:01Z",
                            }
                        ]
                    };
            }


            response.write(JSON.stringify(result));
            response.end();
        },

        getCross : function(request, response) {
          console.log("Entro a getCross");
          var pathname = url.parse(request.url).pathname;

            var uriRegExp = new RegExp('^/uniqueness/cross/users/(\\d+)/(\\w+)');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            var dataType = RegExp.$2;



            var uriRegExpAux = new RegExp('^/uniqueness/cross/users/(\\d+)/(\\w+)/(\\w+)/(\\d+)');
            uriRegExpAux.exec(pathname);

            var docType = RegExp.$3;
            var docNumber = RegExp.$4;

            if((userId == 143972060 ) && dataType == "identification" && docType == "cpf" && docNumber == "9876541"){

                console.log("El usuario en getCross es " + userId + " y el dataType es identification y docType: " +  docType + " docNumber: " + docNumber)

                result = [
                        {
                            "user_id": 143972061,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 143972062,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 143972063,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        }
                    ];
                response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if((userId == 143972050 ) && dataType == "identification" && docType == "cpf" && docNumber == "9876541"){

                console.log("El usuario en getCross es " + userId + " y el dataType es identification y docType: " +  docType + " docNumber: " + docNumber)

                result = [
                        {
                            "user_id": 143972051,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 143972052,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 143972053,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        }
                    ];
                response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});

                response.write(JSON.stringify(result));
                response.end();
                return;
            }



            if((userId == 143972040 ) && dataType == "identification" && docType == "cpf" && docNumber == "9876541"){

                console.log("El usuario en getCross es " + userId + " y el dataType es identification y docType: " +  docType + " docNumber: " + docNumber)

                result = [
                        {
                            "user_id": 143972041,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 143972042,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 143972043,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        }
                    ];
                response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if((userId == 143972033 || userId == 143972034 || userId == 143972035) && dataType == "device_thm"){
                console.log("El usuario en getCross es 143972033 y el dataType es device_thm")

                result = [
                        {
                            "user_id": 77023354,
                            "cross": {
                                "device_thm": [
                                    {
                                        "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                        "first_seen": "2013-06-28T00:00:000Z",
                                        "last_seen": "2013-06-28T00:00:000Z"
                                    }
                                ]
                            }
                        }
                    ];
                response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if((userId == 143972033 || userId == 143972034 || userId == 143972035) && dataType == "device_ml"){
                console.log("El usuario en getCross es 143972033 y el dataType es device_ml")

                result = [
                        {
                            "user_id": 77023354,
                            "cross": {
                                "device_ml": [
                                    {
                                        "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                        "first_seen": "2013-06-28T00:00:000Z",
                                        "last_seen": "2013-06-28T00:00:000Z"
                                    }
                                ]
                            }
                        }
                    ];
                response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});

                response.write(JSON.stringify(result));
                response.end();
                return;
            }

            if((userId == 143972033 || userId == 143972034 || userId == 143972035) && dataType == "identification"){

                console.log("El usuario en getCross es 143972033 y el dataType es identification")

                result = [
                        {
                            "user_id": 77023354,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 77023355,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 77023356,
                            "cross": {
                                "identification": [
                                    {
                                        "id": "MLA_CPF_162586370",
                                        "first_seen": "2014-07-15T14:12:000Z",
                                        "last_seen": "2014-07-15T14:12:000Z",
                                        "worst_ip_geo": null
                                    }
                                ]
                            }
                        }
                    ];
                response.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});

                response.write(JSON.stringify(result));
                response.end();
                return;
            }


            if(userId == 143972023 && dataType == "device_thm"){
              console.log("El usuario en getCross es 143972023 y el dataType es device_thm")

              result = [
                        {
                            "user_id": 77023354,
                            "cross": {
                                "device_thm": [
                                    {
                                        "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                        "first_seen": "2013-06-28T00:00:000Z",
                                        "last_seen": "2013-06-28T00:00:000Z"
                                    }
                                ]
                            }
                        }
                    ];
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify(result));
            response.end();
            return;

            }
            else{

            result = [
                        {
                            "user_id": 141194837,
                            "cross": {
                                "device_thm": [
                                    {
                                        "id": "6a3e649436a543c3bb1db95cd5cecccb",
                                        "first_seen": "2013-06-30T00:00:000Z",
                                        "last_seen": "2013-06-30T00:00:000Z"
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 140994626,
                            "cross": {
                                "device_thm": [
                                    {
                                        "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                        "first_seen": "2013-06-27T00:00:000Z",
                                        "last_seen": "2013-06-27T00:00:000Z"
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 141081475,
                            "cross": {
                                "device_thm": [
                                    {
                                        "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                        "first_seen": "2013-06-28T00:00:000Z",
                                        "last_seen": "2013-06-28T00:00:000Z"
                                    }
                                ]
                            }
                        },
                        {
                            "user_id": 141339975,
                            "cross": {
                                "device_thm": [
                                    {
                                        "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                        "first_seen": "2013-07-03T00:00:000Z",
                                        "last_seen": "2013-07-03T00:00:000Z"
                                    }
                                ]
                            }
                        }
                    ];
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify(result));
            response.end();
          }
        },

        getCrossEvents : function(request, response) {
          var pathname = url.parse(request.url).pathname;
          var uriRegExp = new RegExp('^/uniqueness/cross/users/(\\d+)/events');
          uriRegExp.exec(pathname);
          var userId = RegExp.$1;
          var data = url.parse(request.url, true).query;

          paramFileds = data["fields"];
          console.log("Entro a getCrossEvents");

            var result = [
                            {
                                "user_id": 141194837,
                                "cross": {
                                    "device_thm": [
                                        {
                                            "id": "6a3e649436a543c3bb1db95cd5cecccb",
                                            "first_seen": "2013-06-30T00:00:000Z",
                                            "last_seen": "2013-06-30T00:00:000Z",
                                            "events": [
                                                {
                                                    "id": "payment",
                                                    "date": "2013-06-30T00:00:000Z"
                                                },
                                                {
                                                    "id": "payment",
                                                    "date": "2013-06-30T00:00:000Z"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            },
                            {
                                "user_id": 140994626,
                                "cross": {
                                    "device_thm": [
                                        {
                                            "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                            "first_seen": "2013-06-27T00:00:000Z",
                                            "last_seen": "2013-06-27T00:00:000Z",
                                            "events": [
                                                {
                                                    "id": "payment",
                                                    "date": "2013-06-27T00:00:000Z"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            },
                            {
                                "user_id": 141081475,
                                "cross": {
                                    "device_thm": [
                                        {
                                            "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                            "first_seen": "2013-06-28T00:00:000Z",
                                            "last_seen": "2013-06-28T00:00:000Z",
                                            "events": [
                                                {
                                                    "id": "payment",
                                                    "date": "2013-06-28T00:00:000Z"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            },
                            {
                                "user_id": 141339975,
                                "cross": {
                                    "device_thm": [
                                        {
                                            "id": "d6dcfe65cc2f4632a6b6988132ab17f3",
                                            "first_seen": "2013-07-03T00:00:000Z",
                                            "last_seen": "2013-07-03T00:00:000Z",
                                            "events": [
                                                {
                                                    "id": "payment",
                                                    "date": "2013-07-03T00:00:000Z"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ];

            //mock for Scoring_API_testCrossesWithUserInfo
            if(paramFileds == "all") {
              result = [
                            {
                                "verified_phone": "",
                                "status": "active",
                                "alternative_phone": "",
                                "cross": {
                                    "device_thm": [
                                        {
                                            "id": "9edea9a73f3447e7a6dc89b6cc0eeb0c",
                                            "first_seen": "2014-09-03T14:14:047Z",
                                            "last_seen": "2014-09-03T14:14:047Z",
                                            "worst_ip_geo": "VE",
                                            "events": [
                                                {
                                                    "id": "registration",
                                                    "date": "2014-09-03T14:14:047Z",
                                                    "ips": [
                                                        "190.36.120.30"
                                                    ],
                                                    "creation_date": "2014-09-03T14:23:010Z",
                                                    "true_ip_city": "caracas",
                                                    "true_ip_region": "distrito capital"
                                                }
                                            ]
                                        }
                                    ],
                                    "device_ml": [
                                        {
                                            "id": "52238138e4b0201a69dd00d0",
                                            "first_seen": "2014-09-03T14:22:057Z",
                                            "last_seen": "2014-09-03T14:22:057Z",
                                            "worst_ip_geo": null,
                                            "events": [
                                                {
                                                    "id": "login",
                                                    "date": "2014-09-03T14:22:057Z",
                                                    "ips": [
                                                        "190.36.120.30"
                                                    ],
                                                    "creation_date": "2014-09-03T14:22:057Z",
                                                    "true_ip_city": null,
                                                    "true_ip_region": null
                                                }
                                            ]
                                        }
                                    ],
                                    "smart_thm": [
                                        {
                                            "id": "8d22b42680194575848f9a5396da693b",
                                            "first_seen": "2014-09-03T14:14:047Z",
                                            "last_seen": "2014-09-03T14:14:047Z",
                                            "worst_ip_geo": "VE",
                                            "events": [
                                                {
                                                    "id": "registration",
                                                    "date": "2014-09-03T14:14:047Z",
                                                    "ips": [
                                                        "190.36.120.30"
                                                    ],
                                                    "creation_date": "2014-09-03T14:23:010Z",
                                                    "true_ip_city": "caracas",
                                                    "true_ip_region": "distrito capital"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "area_code": " ",
                                "points": 0,
                                "mp_restrictions": ["PDU_MP","ALERTA_DISPUTAS", "MONEY_IN_TC"],
                                "status_description": {
                                    "mercadoenvios": "not_accepted",
                                    "mercadopago_tc_accepted": true,
                                    "billing": {
                                        "allow": false,
                                        "codes": [
                                            "address_pending",
                                            "address_minimum_length_not_satisfied",
                                            "sitfis_pending",
                                            "address_empty_city",
                                            "address_empty_state"
                                        ]
                                    },
                                    "site_status": "active",
                                    "immediate_payment": false,
                                    "required_action": "",
                                    "user_type": "eventual",
                                    "sell": {
                                        "immediate_payment": {
                                            "reasons": [

                                            ],
                                            "required": false
                                        },
                                        "allow": true,
                                        "codes": [

                                        ]
                                    },
                                    "buy": {
                                        "immediate_payment": {
                                            "reasons": [

                                            ],
                                            "required": false
                                        },
                                        "allow": true,
                                        "codes": [

                                        ]
                                    },
                                    "mercadopago_account_type": "personal",
                                    "list": {
                                        "immediate_payment": {
                                            "reasons": [

                                            ],
                                            "required": false
                                        },
                                        "allow": false,
                                        "codes": [
                                            "address_pending",
                                            "address_minimum_length_not_satisfied",
                                            "sitfis_pending",
                                            "address_empty_city",
                                            "address_empty_state"
                                        ]
                                    },
                                    "confirmed_email": true
                                },
                                "email": "suarezescobar@outlook.es",
                                "name": "SUAREZ ESCOBAR, PEDRO JOSE",
                                "registration_date": "2014-09-03T14:22:51.000-04:00",
                                "site_id": "MLV",
                                "alternative_area_code": "",
                                "nickname": "PREDRITO23",
                                "phone": "04245405691",
                                "verified_area_code": "",
                                "user_id": 165968831,
                                "address": null
                            }
                        ];
            }
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify(result));
            response.end();
        },

        getUsersByDeviceML : function(request, response) {
            var result = {
                            "data_type": "device_ml",
                            "device_id": "526d0e43e4b09e04e3222e40",
                            "ips": [
                              "177.135.219.251",
                              "177.135.219.244",
                              "179.185.0.13"
                            ],
                            "last_update": "2014-02-19T20:28:020Z",
                            "users": [
                              {
                                "hits": 24,
                                "id": 143527331
                              },
                              {
                                "hits": 32,
                                "id": 148975444
                              },
                              {
                                "hits": 2,
                                "id": 45964091
                              }
                            ],
                            "worst_ip_geo": null
                          };
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify(result));
            response.end();
        },

        getDataTypeEvents : function(request, response) {

            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/uniqueness/users/(\\d+)/(\\w+)/events');
            uriRegExp.exec(pathname);
            var userId = RegExp.$1;
            var dataType = RegExp.$2;

            if(userId == 11225544){
              console.log("El usuario si es 11225544")
              response.writeHead(404, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                result = {"message":"User 7325084 not found","error":"not_found","status":404,"cause":[]};
                response.write(JSON.stringify(result));
                response.end();
                return;
            }
            if(userId == 151457264){

                response.writeHead(200, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });

                result = {"device_thm":[{"events":[{"id":"publish","date":"2013-09-15T00:00:000Z","creation_date":null},{"id":"bid","date":"2013-08-27T00:00:000Z","creation_date":null}],"first_seen":"2013-08-27T00:00:000Z","id":"d6838d2cf69a4768967871da28f92228","last_seen":"2013-09-15T00:00:000Z","worst_ip_geo":null},{"events":[{"id":"payment","date":"2014-07-20T09:42:024Z","creation_date":"2014-07-20T09:43:003Z","ip":"181.26.16.65","true_ip_city":"buenos aires","true_ip_region":"ciudad de buenos aires"},{"id":"payment","date":"2014-07-15T17:17:044Z","creation_date":"2014-07-15T17:19:001Z","ip":"181.26.52.123","true_ip_city":"buenos aires","true_ip_region":"ciudad de buenos aires"},{"id":"payment","date":"2014-07-15T17:16:042Z","creation_date":"2014-07-15T17:17:032Z","ip":"181.26.52.123","true_ip_city":"buenos aires","true_ip_region":"ciudad de buenos aires"},{"id":"publish","date":"2014-07-09T15:27:023Z","creation_date":"2014-07-09T15:28:007Z","ip":"181.26.56.223"},{"id":"publish","date":"2014-04-20T16:07:001Z","creation_date":"2014-04-20T16:07:008Z","ip":"181.26.82.185"},{"id":"publish","date":"2014-04-18T12:26:028Z","creation_date":"2014-04-18T12:26:047Z","ip":"181.26.82.22"},{"id":"publish","date":"2014-04-18T12:19:055Z","creation_date":"2014-04-18T12:20:005Z","ip":"181.26.82.22"},{"id":"publish","date":"2014-04-01T22:59:025Z","creation_date":"2014-04-01T22:59:037Z","ip":"181.26.109.79"},{"id":"publish","date":"2014-03-07T18:03:048Z","creation_date":"2014-03-07T18:03:058Z","ip":"181.26.108.252"},{"id":"publish","date":"2014-02-27T19:33:040Z","creation_date":"2014-02-27T19:33:055Z","ip":"181.26.9.82"},{"id":"publish","date":"2013-10-10T00:00:000Z","creation_date":null}],"first_seen":"2013-10-10T00:00:000Z","id":"fd362111f5c642e1877801319337247f","last_seen":"2014-07-20T09:42:024Z","worst_ip_geo":"AR"},{"id":"d0f84665153847bcbeccd6dd2533bcd0","first_seen":"2014-09-08T19:59:028Z","last_seen":"2014-09-08T19:59:028Z","events":[{"id":"publish","date":"2014-09-08T19:59:028Z","creation_date":"2014-09-08T20:00:000Z","ip":"181.26.55.56","true_ip_city":"buenos aires","true_ip_region":"ciudad de buenos aires"}],"worst_ip_geo":"AR"}],"user_id":80447377}
                response.write(JSON.stringify(result));
                response.end();
                return;

            }

            if(userId == 18753456){

              response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            result = {
                        "user_id" : userId,
                        "device_ml" : [
                            {
                                "id" : "51cb55a8e4b0dc5b584d5e71",
                                "first_seen" : "2013-06-26T22:39:37Z",
                                "last_seen" : "2014-02-26T22:39:37Z",
                                "events" : [
                                    {
                                        "id" : "login",
                                        "date" : "2014-02-25T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    },{
                                        "id" : "login",
                                        "date" : "2014-02-24T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    },{
                                        "id" : "payment",
                                        "date" : "2014-02-24T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    },{
                                        "id" : "payment",
                                        "date" : "2014-02-22T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-5678-0"
                                        }
                                    },{
                                         "id": "login",
                                         "date": "2014-02-22T07: 36: 004Z",
                                         "ip": "177.132.157.193",
                                         "creation_date": null,
                                         "cookies" : null
                                    },{
                                         "id": "login",
                                         "date": "2014-02-20T07: 36: 004Z",
                                         "ip": null,
                                         "creation_date": null,
                                         "cookies" : {
                                            "d2id": "abcd-1234-fghi-1"
                                        }
                                    },{
                                         "id": "login",
                                         "date": "2014-01-16T07: 36: 004Z",
                                         "ip": "",
                                         "creation_date": null,
                                         "cookies" : {
                                             "d2id":null
                                        }
                                    },{
                                         "id": "login",
                                         "date": "2014-01-17T07: 36: 004Z",
                                         "ip": "10.4.3.1",
                                         "creation_date": null,
                                         "cookies" : {
                                            "sarasa": "abcd-1234-fghi-1"
                                        }
                                    }
                                ]
                            },
                            {
                                "id" : "51cb6dc1e4b030611aa0309b",
                                "first_seen" : "2013-06-26T22:40:01Z",
                                "last_seen" : "2013-06-26T22:40:01Z",
                                "events" : [
                                    {
                                        "id" : "login",
                                        "date" : "2014-02-26T22:40:01Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    }
                                ]
                            }
                        ]
                    };

                    response.write(JSON.stringify(result));
                    response.end();
                    return;

            }

            else {

            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            result = {
                        "user_id" : userId,
                        "device_ml" : [
                            {
                                "id" : "51cb55a8e4b0dc5b584d5e71",
                                "first_seen" : "2013-06-26T22:39:37Z",
                                "last_seen" : "2014-02-26T22:39:37Z",
                                "events" : [
                                    {
                                        "id" : "login",
                                        "date" : "2014-02-25T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    },{
                                        "id" : "login",
                                        "date" : "2014-02-24T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    },{
                                        "id" : "payment",
                                        "date" : "2014-02-24T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    },{
                                        "id" : "payment",
                                        "date" : "2014-02-22T22:39:37Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-5678-0"
                                        }
                                    },{
                                         "id": "login",
                                         "date": "2014-02-22T07: 36: 004Z",
                                         "ip": "177.132.157.193",
                                         "creation_date": null,
                                         "cookies" : null
                                    },{
                                         "id": "login",
                                         "date": "2014-02-20T07: 36: 004Z",
                                         "ip": null,
                                         "creation_date": null,
                                         "cookies" : {
                                            "d2id": "abcd-1234-fghi-1"
                                        }
                                    },{
                                         "id": "login",
                                         "date": "2014-01-16T07: 36: 004Z",
                                         "ip": "",
                                         "creation_date": null,
                                         "cookies" : {
                                             "d2id":null
                                        }
                                    },{
                                         "id": "login",
                                         "date": "2014-01-17T07: 36: 004Z",
                                         "ip": "10.4.3.1",
                                         "creation_date": null,
                                         "cookies" : {
                                            "sarasa": "abcd-1234-fghi-1"
                                        }
                                    },{
                                         "id": "login",
                                         "date": "2014-01-18T07: 36: 004Z",
                                         "ip": "null",
                                         "creation_date": null,
                                         "cookies" : {
                                            "d2id": "abcd-1234-fghi-1"
                                        }
                                    }
                                ]
                            },
                            {
                                "id" : "51cb6dc1e4b030611aa0309b",
                                "first_seen" : "2013-06-26T22:40:01Z",
                                "last_seen" : "2013-06-26T22:40:01Z",
                                "events" : [
                                    {
                                        "id" : "login",
                                        "date" : "2014-02-26T22:40:01Z",
                                        "cookies" : {
                                            "d2id": "abcd-1234-fghi-0"
                                        }
                                    }
                                ]
                            }
                        ]
                    };
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify(result));
            response.end();

          }

            //response.write(JSON.stringify(result));
            //response.end();
        },

        getUserInGoldList : function(request, response){
          var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/internal/fraud/whitelist/(\\d+)');
          uriRegExp.exec(pathname);
          var userId = RegExp.$1;

          var data

          if(userId == "53779165"){
            data = {"result":{"id":158483278,"admin":"fcofman","admin_id":62867623,"insert_date":"2014-05-13T00:00:00.000-04:00","status":"active"}}
            jsonHandler.showOKResponse(data, response);
          } else if (userId == "53779166") {
            data = {"result":{"id":158483278,"admin":"fcofman","admin_id":62867623,"insert_date":"2014-05-13T00:00:00.000-04:00","status":"deactive"}}
            jsonHandler.showOKResponse(data, response);
          }else if (userId == "443462137") {
            data = {"result":{"id":443462137,"admin":"ggarcete","admin_id":62867623,"insert_date":"2013-12-05T00:00:00.000-04:00","status":"active"}}
            jsonHandler.showOKResponse(data, response);
          }
          else{
            jsonHandler.showNoContentResponse(response);
          }
        },
        getDataByIdentification : function(request, response) {


            console.log("Entro a getDataByIdentification");
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('^/uniqueness/identification/(\\w+)/(\\w+)/(\\w+)');
            uriRegExp.exec(pathname);

            var siteId = RegExp.$1;
            var type = RegExp.$2;
            var value = RegExp.$3;


            console.log("siteId: " + siteId + " type: " + type + " value: " + value);

            var result = {
                    "identification_id": "MLA_CPF_162586370",
                    "data_type": "identification",
                    "users": [
                        {
                            "id": 162586370,
                            "hits": 1,
                            "events": [
                                {
                                    "id": "registration",
                                    "date": "2014-07-15T14:12:000Z",
                                    "ips": [
                                        "1.1.1.1"
                                    ],
                                    "creation_date": "2014-08-28T15:08:021Z",
                                    "true_ip_city": null,
                                    "true_ip_region": null
                                },
                                {
                                    "id": "registration",
                                    "date": "2014-09-15T14:12:000Z",
                                    "ips": [
                                        "1.1.1.1"
                                    ],
                                    "creation_date": "2014-08-28T15:08:021Z",
                                    "true_ip_city": null,
                                    "true_ip_region": null
                                }
                            ]
                        },
                        {
                            "id": 13979209,
                            "hits": 1,
                            "events": [
                                {
                                    "id": "registration",
                                    "date": "2014-08-15T14:12:000Z",
                                    "ips": [
                                        "1.1.1.1"
                                    ],
                                    "creation_date": "2014-08-28T15:20:023Z",
                                    "true_ip_city": null,
                                    "true_ip_region": null
                                }
                                ,{
                                    "id": "registration",
                                    "date": "2014-08-25T14:12:000Z",
                                    "ips": [
                                        "1.1.1.1"
                                    ],
                                    "creation_date": "2014-08-28T15:20:023Z",
                                    "true_ip_city": null,
                                    "true_ip_region": null
                                }
                            ]
                        }
                    ],
                    "last_update": "2014-08-28T15:08:021Z",
                    "ips": [
                        "1.1.1.1"
                    ],
                    "worst_ip_geo": null
                };
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });

            response.write(JSON.stringify(result));
            response.end();
        }
};

exports.getDataTypeEvents = accountUniquenessController.getDataTypeEvents;
exports.getDeviceML = accountUniquenessController.getDeviceML;
exports.getDeviceMLEvents = accountUniquenessController.getDeviceMLEvents;
exports.getEvents = accountUniquenessController.getEvents;
exports.post = accountUniquenessController.post;
exports.ping = accountUniquenessController.ping;
exports.getCross = accountUniquenessController.getCross;
exports.getCrossEvents = accountUniquenessController.getCrossEvents;
exports.getWhitelist = accountUniquenessController.getWhitelist;
exports.getUsersByDeviceML = accountUniquenessController.getUsersByDeviceML;
exports.getUserInGoldList = accountUniquenessController.getUserInGoldList;
exports.getDataByIdentification = accountUniquenessController.getDataByIdentification;


// Mappings
urlMapping.add (
    [
        {
            pattern: '^/uniqueness/ping',
            action: {
                'GET':accountUniquenessController.ping
            }
        },
        {
            pattern: '^/uniqueness/users/\\d+/events',
            action: {
                'GET':accountUniquenessController.getEvents
            }
        },
        {
            pattern: '^/uniqueness/users/\\d+/\\w+/events',
             action: {
                 'GET':accountUniquenessController.getDataTypeEvents
             }
         },
        {
            pattern: '^/uniqueness/users/\\d+/device_ml',
            action: {
                'GET':accountUniquenessController.getDeviceML
            }
        },
        {
            pattern: '^/uniqueness/users/\\d+/device_ml/events',
            action: {
                'GET':accountUniquenessController.getDeviceMLEvents
            }
        },
        {
            pattern: '^/uniqueness/users',
            action: {
                'POST':accountUniquenessController.post
            }
        },
        {
            pattern: '^/uniqueness/cross/users/\\d+/events',
            action: {
                'GET':accountUniquenessController.getCrossEvents
            }
        },

        {
            pattern: '^/uniqueness/cross/users',
            action: {
                'GET':accountUniquenessController.getCross
            }
        },
        {
            pattern: '^/uniqueness/device_ml/(\\w+)',
            action: {
                'GET':accountUniquenessController.getUsersByDeviceML
            }
        },
        {
            pattern: '^/internal/users/uniqueness_whitelist',
            action: {
                'GET':accountUniquenessController.getWhitelist
            }
        },
        {
            pattern: '^/internal/fraud/whitelist/(\\d+)',
            action: {
                'GET':accountUniquenessController.getUserInGoldList
            }
        },
        {
            pattern: '^/uniqueness/identification/(\\w+)/(\\w+)/(\\w+)',
            action: {
                'GET':accountUniquenessController.getDataByIdentification
            }
        }


    ]);

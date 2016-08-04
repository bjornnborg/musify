environments {
    development {
        es {
            httpPort = 9200
        }
    }
    test {
        es {
            httpPort = 9400
        }
    }
    production {
        es {
            httpPort = 9200
        }
    }
}

es {
    clusterName = "musify"
    transport.sniffCluster = true

    hosts = [["host": "127.0.0.1"]]

    operatorTranslation = [
            'eq':'=',
            'neq':'<>',
            'range':'RANGE',
            'list':'LIST',
            'lt':'<',
            'lte':'<=',
            'gt':'>',
            'gte':'>='
    ]

    indexes = [
            ["name": "songs", types: ["song"]],
    ]

    types = [
            ["song": "songs"],
    ]

    search {
        config {
            defaultLimit = 100
            maxLimit = 100

            filterKeys = ["id", "name", "album", "singer"]
            renderKeys = ["id", "name", "album", "singer"]
            //asciifoldingKey = ["username"]

            fields = [
                    "id": ["type": "LONG", "operators": ["=", "<>", ">=", "<=", "<", ">", "LIST"]],
                    "name" : ["type": "STRING", "operators": ["=", "<>", "LIST"]],
                    "album" : ["type": "STRING", "operators": ["=", "<>", "LIST"]],
                    "singer" : ["type": "STRING", "operators": ["=", "<>", "LIST"]]
            ]
        }
    }
}
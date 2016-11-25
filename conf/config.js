/**
 * Created by page.xia on 16/11/24.
 */
module.exports = {
    "development":{
        "mysql":{
            "username": "root",
            "password": "123456",
            "database": "page",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "logging" : console.log,
            "timezone" : "+08.00",
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            }
        },
        "redis" : {
            "host" : "127.0.0.1",
            "port" : 6379,
            "db" : 0
        },
    },
    "production": {
        "mysql":{
            "username": "root",
            "password": "123456",
            "database": "page",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "logging" : console.log,
            "timezone" : "+08.00",
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            }
        },
        "redis" : {
            "host" : "127.0.0.1",
            "port" : 6379,
            "db" : 0
        },
    }
};
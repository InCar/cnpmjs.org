/*
* Extend the login mode
* If config.anonymousVisit set to false
* then even get method will need authorization.
* This will strict only login users can list or install packages.
*
* Author:
* AceBear(https://github.com/AceBear)
* */
var config = require('../config');
var login = require('./login');

var MiddleWare;

(function (MiddleWare){
    function *login4Get(next){
        if(config.anonymousVisit)
            yield *next;
        else {
            yield login.call(this, next);
        }
    }
    MiddleWare.login4Get = login4Get;
})(MiddleWare || (MiddleWare = {}));

module.exports = MiddleWare;
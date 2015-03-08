This project forked from <https://github.com/cnpm/cnpmjs.org>, please forward to <https://github.com/cnpm/cnpmjs.org/wiki> for extra documents.

The only difference is supporting an **anonymous disabled** mode. This mode disable the anonymous user to use "npm info", "npm install".

To enable **anonymous disabled** mode, simply add a configuration *anonymousVisit* to your /config/config.js
```javascript
module.exports = {
    anonymousVisit: false // default is true, allow anonymouse install packages
    debug:false,
    enableCluster: false,
    database:{
        db: '<your-database-name>',
        username: '<your-user-name>',
        password: '<your-password>'
    }
    // ... ignore other configuration items for short
};
```

**anonymous disabled** mode also disable "npm adduser" to add a new user, implement your own logic to do this.

In **anonymous disabled** mode, you should add **--always-auth** argument to npm command.  
**DO NOT SUPPORT NPM 1.x**  
**You should use npm 2.x**. Check your npm version via "npm --version".
```
npm info @yourScope/yourPackage --registry=http://registry.yourdomain.com --always-auth
```
If you like simply type "npm info @yourScope/yourPackage", use "npm login" first as below:
```
npm login --registry=http://registry.yourdomain.com --scope=@yourScope --always-auth
```

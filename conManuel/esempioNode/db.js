const mysql = require( 'mysql' );

class Db {

    connection;

    constructor ( host, user, password, database ) {
        this.connection = mysql.createConnection( {
            host,
            user,
            password,
            database
        } );

        this.connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        })
    }
}

module.exports = {Db};
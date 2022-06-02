const mysql = require( 'mysql' );
const db_info = {
    host: 'database-1.c8z3gj6erdlp.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'adminadmin',
    database: 'db_test'
}

module.exports = {
    init: function () {
        return mysql.createConnection( db_info );
    },
    connect: function ( conn ) {
        conn.connect( function ( err ) {
            if ( err ) {
                console.log( `mysql connection error : ${err}` );
            } else {
                console.log( 'mysql is connected successfully!!!' );
            }
        } );
    }
}

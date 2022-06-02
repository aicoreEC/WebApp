const mysql = require( 'mysql' );
const connection = mysql.createConnection( {
    host: 'database-1.c8z3gj6erdlp.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'adminadmin',
    database: 'db_test'
} );

connection.connect( ( err ) => {
    if ( err ) {
        throw err;
    } else {
        connection.query( 'SELECT * FROM board', ( err, rows, fields ) => {
            console.log( rows );
        } );
    }
} );

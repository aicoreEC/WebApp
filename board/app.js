const express = require( 'express' );
const app = express(); 
const port = 8080;

const db_config = require( __dirname + '/config/database.js' );
const conn = db_config.init();
db_config.connect( conn );

app.get( '/', function ( req, res ) {
    res.send( 'ROOT' );
} );

app.listen( port, () => console.log( `Server is running... [ ${port} ]` ) );

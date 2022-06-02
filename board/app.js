const express = require( 'express' );
const app = express(); 
const port = 8080;

const db_config = require( __dirname + '/config/database.js' );
const conn = db_config.init();
db_config.connect( conn );

const bodyParser = require( 'body-parser' );
app.set( 'views', __dirname + '/views' )
app.set( 'view engine', 'ejs' );

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) );

app.get( '/', function ( req, res ) {
    res.send( 'ROOT' );
} );

app.get( '/list', function ( req, res ) {
    const sql = 'SELECT * FROM db_test.board';
    conn.query( sql, function ( err, rows, fields ) {
        if ( err ) { console.log( `query is not excuted. select fail...\n${err}` ); }
        else { res.render( 'list.ejs', { list : rows } ); }
    } )
} );

app.listen( port, () => console.log( `Server is running... [ ${port} ]` ) );

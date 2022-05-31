const http = require( 'http' );
const url = require( 'url' );
const querystring = require( 'querystring' );

const port = 8080;

const server = http.createServer( function( request, response) {
    console.log( '--- log start ---' );

    const parseUrl = url.parse( request.url );
    console.log( parseUrl );

    const parsedQuery = querystring.parse( parseUrl.query, '&', '=' );
    console.log( parsedQuery );

    console.log( '--- log end ---' );

    response.writeHead( 200, { 'Content-Type':'text/html; charset=utf-8' } );
    response.end( `var1 [ ${parsedQuery.var1} ] : var2 [ ${parsedQuery.var2} ] : var3 [ ${parsedQuery.var3} ]` );
} ).listen( port, function() {
    console.log( `Server is running... [ ${port} ]` );
} );

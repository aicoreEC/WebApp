const http = require( 'http' );
const querystring = require( 'querystring' );

const port = 8080;

const server = http.createServer( function( request, response ) {
    var postdata = '';

    request.on( 'data', function( data ) {
        postdata += data;
    } );

    request.on( 'end', function() {
        const parsedQuery = querystring.parse( postdata );
        console.log( parsedQuery );

        response.writeHead( 200, { 'Content-Type':'text/html; charset=utf-8' } );
        response.end( `var1 = [ ${parsedQuery.name} ]` );
    } )
} ).listen( port, function() {
    console.log( `Server is running... [ ${port} ]` );
} );

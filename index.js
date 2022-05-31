const http = require( 'http' );
const port = 8080;

const server = http.createServer( function( request, response ) {
    response.writeHead( 200, { 'Content-Type':'text/html; charset=utr-8' } );
    response.end( 'Hello, Node.js!!!' );
} );

server.listen( port, function() {
    console.log( `Server is running...[ ${port} ]` );
} );

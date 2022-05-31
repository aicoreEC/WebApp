const http = require( 'http' );
const url = require( 'url' );

const port = 8080;

const server = http.createServer( function ( request, response ) {
    console.log( request.url );

    const parsedUrl = url.parse( request.url );
    const resource = parsedUrl.pathname;
    console.log( `resource path = ${resource}` );

    if ( resource === '/address' ) {
        response.writeHead( 200, { 'Content-Type':'text/html; charset=utf-8' } );
        response.end( '서울특별시 종로구 종로2가 111' );
    } else if ( resource === '/phone' ) {
        response.writeHead( 200, { 'Content-Type':'text/html; charset=utf-8' } );
        response.end( '010-1234-5678' );
    } else if ( resource === '/name' ) {
        response.writeHead( 200, { 'Content-Type':'text/html; charset=utf-8' } );
        response.end( '홍길동' );
    } else {
        response.writeHead( 200, { 'Content-Type':'text/html; charset=utf-8' } );
        response.end( '404 Page Not Found' );
    }
} ).listen( port, function() {
    console.log( `Server is running... [ ${port} ]` );
} );

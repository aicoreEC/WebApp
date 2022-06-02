let express = require( 'express' );
let app = express();

let port = 8080;

app.get( '/', ( req, res ) => res.send( 'Hello, Node.js!!! - GET method' ) );

app.post( '/', ( req, res ) => res.send( 'Hello, Node.js!!! - POST method' ))

app.listen( port, () => console.log( `Server is running... [ ${port} ]` ) );

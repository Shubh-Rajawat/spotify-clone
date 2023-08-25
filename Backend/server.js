const express = require( 'express' );
const connect = require( './config/db' );
const userRouter = require( './Routes/userRoute' );
const bodyParser = require( "body-parser" );
const songRouter = require( './Routes/songRoute' );
const dotenv = require( 'dotenv' ).config( {
    path: './config/.env'
} );
const app = express();
connect();
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( "/track", express.static( "uploads" ) );
app.use( express.json() )
// routes
app.use( '/user', userRouter )
app.use( '/songs', songRouter )

app.listen( process.env.PORT, () => {
    console.log( `server port ${ process.env.PORT }` );
} )

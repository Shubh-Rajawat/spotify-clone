const express = require( "express" )
const connect = require( "./config/db" )
const cors = require( 'cors' )
const userrouter = require( "./Routes/userRoutes" )
const songRouter = require( "./Routes/songRoutes" )
const dotenv = require( "dotenv" ).config( { path: "./config/.env" } )
const app = express()
const hostname = '192.168.29.23';
connect()
app.use( express.json() )
app.use( cors( { origin: "*" } ) )
app.use( "/track", express.static( "uploads" ) );
app.use( '/user', userrouter )
app.use( '/song', songRouter )
app.get( "", ( req, res ) => {
    res.send( "Hello World I hosted my node app" );
    res.end();
} )
app.listen( process.env.PORT, "169.254.16.39", () => {
    console.log( `Server is running on port ${ process.env.PORT }` )
} )
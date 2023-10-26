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
app.use( "/uploads", express.static( __dirname + "/uploads" ) );
app.use( '/user', userrouter )
app.use( '/song', songRouter )
app.get( "", ( req, res ) => {
    res.send( "Hello World I hosted my node app" );
    res.end();
} )
app.listen( process.env.PORT, "192.168.29.23", () => {
    console.log( `Server is running on port ${ process.env.PORT }` )
} )
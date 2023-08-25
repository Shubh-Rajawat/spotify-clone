const mongoose = require( 'mongoose' );
const connect = async () => {
    const db = await mongoose.connect( process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } )
    if ( db ) {
        console.log( "database connected " )
    }
}

module.exports = connect;
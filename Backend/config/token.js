const jwtTkn = require( "jsonwebtoken" )

const GenerateTkn = async ( id ) => {
    const token = jwtTkn.sign( { id }, process.env.SECRET_KEY )
    return token;
}

module.exports = GenerateTkn;
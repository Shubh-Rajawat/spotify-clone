const { User } = require( "../Models/userModel" );
const bcrypt = require( "bcryptjs" );
const token = require( "../config/token" );
const signup = async ( req, res ) => {
    try {
        const { name, email, dob, password, gender } = req.body;
        if ( !name || !email || !password || !dob || !gender ) {
            res.status( 400 ).json( { msg: "All fields are required" } );
        } else {
            const existEmail = await User.findOne( { email: email } );
            if ( existEmail ) {
                res.status( 403 ).json( { msg: "Email already exists" } );
            } else {
                //Hashing the Password
                const hashingpass = await bcrypt.hash( password, 10 );
                if ( hashingpass ) {
                    const newUser = await User.create( {
                        name: name,
                        email: email,
                        dob: dob,
                        password: hashingpass,
                        gender: gender,
                    } );
                    if ( newUser ) {
                        const userToken = await token( newUser._id );
                        let finalData = newUser.toObject();
                        delete finalData.password;
                        res
                            .status( 201 )
                            .json( { msg: "user created ", data: finalData, userToken } );
                    } else {
                        res.status( 400 ).json( { msg: "creation error" } );
                    }
                } else {
                    res.status( 400 ).json( { msg: "hash errorm" } );
                }
            }
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server error", error } );
    }
};
// signup ends here
// login starts here
const login = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        if ( !email || !password ) {
            res.status( 400 ).json( { msg: "All fields are required" } );
        } else {
            const user = await User.findOne( { email } );
            if ( user ) {
                const ceckPass = await bcrypt.compare( password, user.password );
                if ( ceckPass ) {
                    const finalData = user.toObject()
                    delete finalData.password
                    const userToken = await token( user._id )
                    res.status( 200 ).json( { msg: "login successful", data: finalData, token: userToken } );
                } else {
                    res.status( 400 ).json( { msg: "Email or Password not matched" } );
                }
            } else {
                res.status( 400 ).json( { msg: "Email or Password not matched" } );
            }
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server error", error } );
    }
};

module.exports = { signup, login };

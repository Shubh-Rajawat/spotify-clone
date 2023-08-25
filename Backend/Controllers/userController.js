const User = require( "../Models/userModel" );
const bcrypt = require( "bcryptjs" );
const GenerateTkn = require( "../config/token" );



const signup = async ( req, res ) => {
    try {
        const { email, name, password, dob, gender, marketMsg, shareData } = req.body;
        // console.log( req.body );
        if ( !email || !name || !password || !dob ) {
            res.status( 400 ).json( { error: "Please fill all the fields" } );
        } else {
            const extUser = await User.findOne( { email } );
            if ( extUser ) {
                res.status( 403 ).json( { status: false, msg: "user already exist" } );
            } else {
                const hashPsd = await bcrypt.hash( password, 10 )


                const newUser = await User.create( {
                    email, name, password: hashPsd, dob, gender, shareData, marketMsg
                } )
                if ( newUser ) {
                    const tkn = await GenerateTkn( newUser._id )
                    const FinalData = newUser.toObject()
                    delete FinalData.password;
                    res.status( 201 ).json( { status: true, data: FinalData, token: tkn } )
                } else {
                    res.status( 400 ).json( { status: false, msg: "error occured" } );

                }
            }

        }


    } catch ( error ) {
        res.status( 500 ).json( { msg: "server Error" } )
    }
}

const login = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        if ( !email || !password ) {
            res.status( 400 ).json( { msg: "All fields required" } )

        } else {
            const user = await User.findOne( { email } )
            if ( user ) {
                const matchPsd = await bcrypt.compare( password, user.password )
                if ( matchPsd ) {
                    const tkn = await GenerateTkn( user._id )
                    const FinalData = user.toObject()
                    delete FinalData.password;
                    res.status( 200 ).json( { FinalData, token: tkn } )

                } else {
                    res.status( 404 ).json( { msg: "Email or password is invalid" } )

                }
            } else {
                res.status( 404 ).json( { msg: "Email or password is invalid" } )
            }
        }
    } catch {
        res.status( 500 ).json( { msg: "server Error" } )
    }
}

const updateUser = async ( req, res ) => {
    try {
        const { email, id, updatedName } = req.body;

        if ( email ) {
            const userUpdate = await User.findByIdAndUpdate( { _id: id }, { name: updatedName } )

            res.status( 201 ).json( { userUpdate, msg: "userUpdated successfully" } )

        }

    } catch ( error ) {
        res.status( 500 ).json( { msg: "server Error" } )
    }
}


module.exports = { signup, login, updateUser };


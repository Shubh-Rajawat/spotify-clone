const mongoose = require( 'mongoose' );


const userSchema = mongoose.Schema( {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    dob: { type: String, require: true },
    gender: { type: String, require: true },
    marketMsg: { type: Boolean, default: false },
    shareData: { type: Boolean, default: false },

}, { timestamps: true } )

const User = mongoose.model( "User", userSchema )
module.exports = User;
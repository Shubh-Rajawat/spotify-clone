const mongoose = require( 'mongoose' );


const albumSchema = mongoose.Schema( {
    title: { type: String, required: true },
    release_date: { type: Date },
    genre: { type: String },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    songs: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Song' } ],
    cover_image: { type: String },
} )

const Album = mongoose.model( "Album", albumSchema )
module.exports = Album;
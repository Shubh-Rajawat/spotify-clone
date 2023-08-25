const mongoose = require( 'mongoose' );

const songSchema = mongoose.Schema( {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },

    genre: { type: String },
    lyrics: { type: String },
    audio_url: { type: String, required: true },

}, { timestamps: { type: Date, default: Date.now } }
);

const Song = mongoose.model( 'Song', songSchema );

module.exports = Song;
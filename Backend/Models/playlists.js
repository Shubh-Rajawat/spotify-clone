const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],


}, { timestamps: { type: Date, default: Date.now }, });

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;

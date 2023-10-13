const mongoose = require('mongoose');

const userPlaylistSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    playlist: { type: mongoose.Schema.Types.ObjectId, ref: 'Playlist', required: true },

}, { timestamps: { type: Date, default: Date.now }, });

const UserPlaylist = mongoose.model('UserPlaylist', userPlaylistSchema);

module.exports = UserPlaylist;

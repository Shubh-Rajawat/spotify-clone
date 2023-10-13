const mongoose = require("mongoose")

const recentlyPlayed = mongoose.Schema({
    uid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    songs_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
})

const Recently = mongoose.model("Recently", recentlyPlayed)
module.exports = Recently;
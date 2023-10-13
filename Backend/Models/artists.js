const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
    name: { type: String },
    biography: { type: String },
    profile_picture: { type: String },
    cover: { type: String }

})
const Artist = mongoose.model("Artist", artistSchema)
module.exports = Artist
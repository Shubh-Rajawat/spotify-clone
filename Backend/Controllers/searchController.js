const Album = require("../Models/albums");
const Artist = require("../Models/artists");
const Song = require("../Models/songs");



const search = async (req, res) => {

    try {
        const { name } = req.body
        if (name) {
            const songs = await Song.find({
                "$or": [
                    { title: { $regex: name, $options: 'i' } }
                ]
            })
            const artist = await Artist.find({
                "$or": [
                    { name: { $regex: name, $options: 'i' } }
                ]
            })
            const album = await Album.find({
                "$or": [
                    { title: { $regex: name, $options: 'i' } }
                ]
            })
            if (songs || artist || album) {
                res.status(200).json({ data: { artist, album, songs } })
            } else {
                res.status(400).json({ msg: "no data found" })

            }

        } else {
            res.status(400).json({ msg: "search name is required" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Server Error" });

    }
}

module.exports = search
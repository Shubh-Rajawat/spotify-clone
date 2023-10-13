const Playlist = require("../Models/playlists");


exports.addPlaylist = async (req, res) => {
    try {
        const { title, description, songs } = req.body
        if (title && description && songs) {

            console.log(req.user._id);

            const addPlaylist = await Playlist.create({
                title, description, creator: req.user._id, songs
            })


            if (addPlaylist) {
                res.status(201).json({ msg: "playlist created", data: addPlaylist })
            } else {
                res.status(404).json({ msg: "error occured" })

            }
        } else {
            res.status(404).json({ msg: "all fiels are reuired" })

        }
    } catch (error) {
        res.status(500).json({ msg: "Server error" })
    }
}


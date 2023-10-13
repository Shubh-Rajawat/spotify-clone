const Recently = require("../Models/recentlyPlayed");

const addToRecents = async (req, res) => {

    try {
        const { songs_id } = req.body
        if (songs_id) {
            const find_in_recents = await Recently.findOne({ songs_id: songs_id })
            if (find_in_recents) {
                res.status(200).json({ msg: "song already" })

            } else {
                const add_to_recent = await Recently.create({
                    songs_id: songs_id,
                    uid: req.user._id
                })
                if (add_to_recent) {
                    res.status(200).json({ status: true, data: add_to_recent })

                } else {
                    res.status(400).json({ msg: "error occured" })

                }

            }
        } else {
            res.status(404).json({ msg: "song id required" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Server error" })
    }

}


const get_all_recents = async (req, res) => {
    try {
        const uid = req.user._id
        const recentData = await Recently.find({ uid: uid })
        if (recentData) {
            res.status(200).json({ status: true, data: recentData })

        } else {
            res.status(200).json({ msg: "No data found", status: false })

        }
    } catch (error) {
        res.status(500).json({ msg: "Server error" })

    }
}
module.exports = { addToRecents, get_all_recents }
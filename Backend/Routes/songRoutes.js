const express = require("express")
const { addAlbum, getAlbum } = require("../Controllers/albumController")
const { upload } = require("../Middleware/fileupload")
const { addArtist, getAllArtists } = require("../Controllers/artistController")
const { addSong, fetchSong } = require("../Controllers/songController")
const { authinticate } = require("../Middleware/auth")
const { addPlaylist } = require("../Controllers/playlistController")
const search = require("../Controllers/searchController")
const { addToRecents, get_all_recents } = require("../Controllers/recentsController")


const songRouter = express.Router()
// admin routes starts

// add album 
songRouter.post('/add-album', upload.single("track"), addAlbum)
// add artist
songRouter.post('/add-artist', upload.fields([
    { name: "img" },
    { name: "bannerimg" }
]), addArtist)
// add songs
songRouter.post('/add-song', upload.single('track'), addSong)
// user playlist 
songRouter.post('/add-playlist', authinticate, upload.single('track'), addPlaylist)

// admin routes ends here

// get album using artist id
songRouter.post("/album", getAlbum)

// get all artist
songRouter.get('/artists', getAllArtists)


// search by name of artist ,song, album
songRouter.post('/search', search)

// fetch song
songRouter.post('/get-song', fetchSong)

// recently played
songRouter.post("/recents", authinticate, addToRecents)
songRouter.get("/get-recents", authinticate, get_all_recents)
module.exports = songRouter
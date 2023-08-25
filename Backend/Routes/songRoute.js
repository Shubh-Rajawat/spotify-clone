const express = require( "express" )
const { addAlbum } = require( "../Controllers/albumController" )
const { upload } = require( "../Middlewares/fileUpload" )
const { addArtist, updateArtist } = require( "../Controllers/artistController" )
const { addSong } = require( "../Controllers/songController" )



const songRouter = express.Router()
// admin routes starts

// add album 
songRouter.post( '/add-album', upload.single( "track" ), addAlbum )
// add artist
songRouter.post( '/add-artist', upload.fields( [
    { name: "img" },
    { name: "bannerimg" }
] ), addArtist )

songRouter.post( '/update-artist', upload.fields( [
    { name: "img" },
    { name: "bannerimg" }
] ), updateArtist )
// add songs
songRouter.post( '/add-song', upload.single( 'track' ), addSong )
// user playlist 


// admin routes ends here

// get album using artist id


// get all artist



// search by name of artist ,song, album


// fetch song


module.exports = songRouter
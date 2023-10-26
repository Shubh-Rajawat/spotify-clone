const Song = require( "../Models/songs" );


// likes should store user id
const addSong = async ( req, res ) => {
    try {
        const file = req.file
        const { title, duration, artist, genre, lyrics, likes } = req.body

        let song = `${ file.path }`

        const addSong = await Song.create( {
            title, duration, artist, genre, lyrics, audio_url: song, likes
        } )

        if ( addSong ) {

            res.status( 201 ).json( { msg: "song added ", data: addSong, status: false } )
        }
        else {
            res.status( 201 ).json( { msg: "something went wrong", status: false } )
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server error" } )
    }
}

// get a song
const fetchSong = async ( req, res ) => {
    try {
        const { song_id } = req.body
        if ( song_id ) {
            const song = await Song.findOne( { _id: song_id } )
            if ( song ) {
                res.status( 200 ).json( { data: song, status: true } )
            } else {
                res.status( 404 ).json( { msg: "unknown sogn id", status: false } )

            }
        } else {
            res.status( 400 ).json( { msg: "song id required" } )

        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server error" } )

    }
}
const getSongByGenre = async ( req, res ) => {
    try {
        const { genre } = req.body
        if ( genre ) {
            const song = await Song.find( { genre: genre } )
            if ( song ) {
                res.status( 200 ).json( { data: song, status: true } )
            } else {
                res.status( 404 ).json( { msg: "unknown song genre", status: false } )
            }
        } else {
            const song = await Song.find( {} )
            if ( song ) {
                res.status( 200 ).json( { data: song, status: true } )
            }
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server error" } )

    }
}
module.exports = { addSong, fetchSong, getSongByGenre }

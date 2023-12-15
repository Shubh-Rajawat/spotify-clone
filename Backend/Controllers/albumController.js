const Album = require( "../Models/albums" );



// add Album api
const addAlbum = async ( req, res ) => {
    try {
        const file = req.file
        const { title, release_date, genre, artist, songs } = req.body

        let cover_img = `http://localhost:6969/track/${ file.filename }`

        const addAlbum = await Album.create( {
            title,
            release_date, genre, artist, songs, cover_image: cover_img
        } )
        if ( addAlbum ) {
            return res.status( 201 ).json( { msg: "album added successfully", addAlbum, status: true } )
        } else {
            return res.status( 400 ).json( { msg: "error occured", status: false } )

        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server error", error } );
    }
}
// get all Album api
const getAlbum = async ( req, res ) => {
    try {
        const { art_id } = req.body
        if ( art_id ) {
            const album = await Album.find( { artist: art_id } )
            if ( album ) {
                res.status( 200 ).json( { data: album, status: true } )
            } else {
                res.status( 404 ).json( { msg: "No album found", status: false } );
            }
        } else {
            res.status( 404 ).json( { msg: "artist id required", status: false } );
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server error", error } );
    }
}
module.exports = { addAlbum, getAlbum }
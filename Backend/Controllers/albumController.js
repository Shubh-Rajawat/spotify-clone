const Album = require( "../Models/albumModel" );
const Albums = require( "../Models/albumModel" );


const addAlbum = async ( req, res ) => {
    try {
        const file = req.file
        const { title, release_date, genre, artist, songs } = req.body
        // console.log( file )

        let cover_img = `http://localhost:6969/track/${ file.filename }`

        const addAlbum = await Album.create( {
            title,
            release_date, genre, artist,
            songs,
            cover_image: cover_img
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


module.exports = { addAlbum }
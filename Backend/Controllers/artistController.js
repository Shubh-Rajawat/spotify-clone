const Artist = require( "../Models/artists" );

const addArtist = async ( req, res ) => {
    try {
        const file = req.files;
        const { name, biography } = req.body;
        let profilePath = `${ file.bannerimg[ 0 ].path }`;
        let coverPath = `${ file.img[ 0 ].path }`;
        // console.log(profilePath)

        const newArtist = await Artist.create( {
            name,
            biography,
            profile_picture: profilePath,
            cover: coverPath,
        } );
        if ( newArtist ) {
            res.status( 200 ).json( { data: newArtist } );
        } else {
            res.status( 400 ).json( { msg: " Error occured" } );
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server Error" } );
    }
};

// get all artist 
const getAllArtists = async ( rew, res ) => {
    try {
        const artists = await Artist.find( {} )
        if ( artists ) {
            res.status( 200 ).json( { status: true, data: artists } )
        } else {
            res.status( 404 ).json( { msg: "No artist found", status: true } )
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server Error" } );

    }
};
module.exports = { addArtist, getAllArtists };

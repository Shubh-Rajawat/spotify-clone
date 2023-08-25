const Artist = require( "../Models/artistModel" );

const addArtist = async ( req, res ) => {
    try {
        const file = req.files;
        const { name, biography } = req.body;
        let profilePath = `http://localhost:9696/track/${ file.bannerimg[ 0 ].filename }`;
        let coverPath = `http://localhost:9696/track/${ file.img[ 0 ].filename }`;
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

// update artist

const updateArtist = async ( req, res ) => {
    try {

        const file = req.files;
        const { name, biography, artistId } = req.body;
        let profilePath = `http://localhost:9696/track/${ file.bannerimg[ 0 ].filename }`;
        let coverPath = `http://localhost:9696/track/${ file.img[ 0 ].filename }`;


        const updatedArtist = await Artist.findByIdAndUpdate(
            artistId,
            {
                name,
                biography,
                profile_picture: profilePath,
                cover: coverPath,
            },
            { new: true }
        );

        if ( updatedArtist ) {
            res.status( 200 ).json( { data: updatedArtist } );
        } else {
            res.status( 404 ).json( { msg: "Artist not found" } );
        }
    } catch ( error ) {
        res.status( 500 ).json( { msg: "Server Error" } );
    }
};

module.exports = { addArtist, getAllArtists, updateArtist };

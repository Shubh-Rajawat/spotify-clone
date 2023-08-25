const mongoose = require( 'mongoose' );


const categorySchema = mongoose.Schema( {


} )

const Categories = mongoose.model( "Categories", categorySchema )
module.exports = Categories;
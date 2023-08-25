const express = require( 'express' );
const { signup, login, updateUser } = require( '../Controllers/userController' );
const userRouter = express.Router();



userRouter.post( '/signup', signup );
userRouter.post( '/login', login );
userRouter.post( '/update', updateUser );



module.exports = userRouter;
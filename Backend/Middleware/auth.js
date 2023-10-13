const jwt = require("jsonwebtoken");
const { User } = require("../Models/userModel");

exports.authinticate = async (req, res, next) => {
    try {
        const { token } = req.query
        if (!token) {
            return res.status(401).json({ message: "No token provided" })
        } else {
            const decoded = await jwt.verify(token, process.env.SECRET)
            if (decoded.id) {
                req.user = await User.findOne({ _id: decoded.id })
                if (req.user) {
                    next()
                } else {
                    return res.status(401).json({ message: "user not exit" })
                }
            }
        }
    } catch (error) {
        res.status(500).json("Server error" + error)
    }
}


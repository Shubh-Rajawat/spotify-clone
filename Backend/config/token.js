
const JWT = require("jsonwebtoken")

const token = async (id) => {
    const jwt = await JWT.sign({ id }, process.env.SECRET)
    return jwt
}

module.exports = token
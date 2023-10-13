const mongoose = require("mongoose");
const joi = require("joi")

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    gender: { type: String, require: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    dob: { type: Date, require: true },
},
    { timestamps: true }
)

const validate = (userSchema) => {
    const schema = joi.object({
        name: joi.string().min(4).required(),
        email: joi().email().required(),
        password: joi().string().required(),
        gender: joi().string().valid("male", "female").required(),
        dob: joi().string().required(),

    })
    return schema.validate(userSchema)
}
const User = mongoose.model("User", userSchema)
module.exports = { User, validate }

const jwt = require("jsonwebtoken")

const generateJWT = (uid) => new Promise((resolve, reject) => {
    const payload = { uid }
    jwt.sign(payload, "JWTSEcretKey!", {
        expiresIn: "365d"
    }, (err, token) => {
        if (err) { reject(err) }
        else { resolve(token) }
    })

})

module.exports = {
    generateJWT
}
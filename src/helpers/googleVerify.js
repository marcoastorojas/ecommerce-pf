const { OAuth2Client } = require("google-auth-library")



const googleVerify = async (idToken) => {
    const client = new OAuth2Client("954172892896-8fnhbgil5quoo3bag1bk04s9vheaga7s.apps.googleusercontent.com")
    const ticket = await client.verifyIdToken({
        idToken,
        requiredAudience: "954172892896-8fnhbgil5quoo3bag1bk04s9vheaga7s.apps.googleusercontent.com",
    })
    const payload = ticket.getPayload()
    return {
        email: payload.email,
        name: payload.given_name,
        google: true,
        lastname: payload.family_name,
        image: payload.picture,
    }

}
module.exports = {
    googleVerify
}
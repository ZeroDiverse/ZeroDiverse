const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.GMAIL_ID_CLIENT,
    process.env.GMAIL_SECRET_CLIENT,
    "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN
});

const myAccessToken = oauth2Client.getAccessToken()

module.exports = myAccessToken;
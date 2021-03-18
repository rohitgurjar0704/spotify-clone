// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint =
"https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "cd70911e35ff49879883c4f36234edee"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&responce_type=token&show_dialog=true`; 
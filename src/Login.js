import React from 'react'
import "./Login.css";
import { loginUrl } from './spotify';
function Login() {
    return (
        //BEM
        <div className="login">
        
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt=""/>          
            {/* Spotify Logo */}
            {/* Login using Spotify button */}
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;

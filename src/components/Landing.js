import React from "react";
import logo from "/Users/ak/dev/react-playlist-app/playlists/src/images/logo.svg";
import "../App.css";



export default function Landing() {
  return (
    <div>
      <header id="header">
          <h1>Hello stranger!</h1>
         
          
        <img src={logo} alt="Logo" width="350" height="450" />


        <h3>Welcome to my music universe</h3>
      </header>
    </div>
  );
}

import React from "react";
import "./navBar.css";

const Navbar = () => {
    return (
     <nav>
      <div className="navLogoContainer">
 <div className="navLogo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify Logo" />
            </div>
      
       
      <div className="navListContainer">
        <ul className="navList">
          
          <a href=""><li>Home</li></a>
          <li>Preminum</li>
          </ul>
          </div>
        <div className="navSearchContainer">
          <input type="text" placeholder="Search" />
            <span>
                <svg data-encore-id="icon" role="img" aria-hidden="true" className="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"><path d="M9.5 3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm10.707 16.293a1 1 0 0 1-1.414 0l-4.586-4.586A8.5 8.5 0 1 1 18.207 19l1.414-1.414z"></path></svg>
            </span>
             </div>
        
      </div>
     </nav>
    );
}

export default Navbar;
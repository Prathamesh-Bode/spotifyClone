import React from "react";
import "./SlideBar.css"
import Cards from "./Cards"
const Slidebar = () => {
    const Text =["Legal","Security and Privacy center","privacy Policy","Cookies","About Ads","Accessibility"]
    return (
        <div className="sidebarMainContainer">
            <div className="sidebarTopSection">
              <h1>Your Library</h1> 
              <p>+</p> 
            </div>
            <div className="sidebarMiddleSection">
                <Cards heading = "Create Your First Playlist" subheading = "it's easy, we'll help" 
                buttontext = "Create Playlist"/>
                <br/>
                <Cards heading = "Let's find Some Podcast to follow" subheading = "we'll keep you updated on new episodes" 
                buttontext = "Browse podcasts"/>
            </div>
             <div className="sidebarBottomSection">
                <div className="sidebarBottomSectionTopContainer">
                   {
                    Text.map((ele)=>{
                        return(
                    <p>{ele}</p>
                    )
                    })
                   }
                    
                </div>
                <div className="sidebarBottomSectionBottomContainer">
                 <p>Cookies</p>
                </div>
                  <div className="sidebarBottomSectionBottomContainer">
                 <button>English</button>
                </div>
             </div>
        </div>
    )
}

export default Slidebar;
import React from "react";
import logo from "../bryandelossantos.png";
import anime from "../animesmoker.gif"
import "../css/Home.css"


function Home() {
    return(
        <div className = "Homebg">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1 >
          Bryan De Los Santos
        </h1>
         
         <img src = {anime} className = "anime-tion" />
        

        </div>
        );
}

export default Home
import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Project1 from "../components/Project1.js";

function Projects() {

   
    
    return(
        <div>
        
            <h1> My Projects: </h1>

            <nav>
                <Link to ="Project1"> <h2>Project 1</h2> </Link>
            </nav>
        
       
        </div>

    );
}

export default Projects
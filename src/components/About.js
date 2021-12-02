import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import "../css/About.css"
import resumepdf from "../Resume.pdf"

function About() {
    return(
        <div className = "Abouts">
            <h3 className = "para"> 
                My name is Bryan De Los Santos and I love 
                programming, reading, and watching the UFC.
                My preferred programming language is Python, my 
                favorite book is Mother Night by Kurt Vonnegut, and
                my favorite UFC fighter is Jon Jones.  
    
                If I had to encapsulate who I am in one word it would be
                "dutiful." I find that keeping my word is not only fulfilling,
                but it tends to make people percieve my words as action, that is to say,
                they percieve my words not as wind, but stone.
            </h3>

            <b/>
            <div className = "dowload">
            <h3> Download my Resume:</h3>
            <a href = {resumepdf}    download = "resume">
                <h2 src = {resumepdf}> RESUME </h2>

            </a>
            </div>


        </div>
        );
}

export default About
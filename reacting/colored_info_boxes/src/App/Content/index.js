import React, {Component} from "react";
import "./index.css";
import Boxes from "./Box";

function Content(props) {
    let info = [
        {
            name: "Harry Potter",
            status: "Alive",
            bio: "The boy who whined.",
            backgroundColor: "blue" 
        },
        {
            name: "Hermione Granger",
            status: "Alive",
            bio: "Super smart, married an idiot.",
            backgroundColor: "purple" 
        },
        {
            name: "Ron Weasley",
            status: "Alive",
            bio: "Underappreciated, but still an idiot.",
            backgroundColor: "red" 
        },
        {
            name: "Albus Dumbledore",
            status: "Deceased",
            bio: "Kept everything a secret without a good reason.",
            backgroundColor: "yellow",
            color: "black"
        },
        {
            name: "Severus Snape",
            status: "Deceased",
            bio: "Typical misunderstood goth who died for everyone but nobody knew because of Dumbledore's secrets.",
            backgroundColor: "black"
        },
        {
            name: "Luna Lovegood",
            status: "Alive",
            bio: "Super quirky, like over the top quirky. Extremely loyal though.",
            backgroundColor: "pink",
            color: "black" 
        },
        {
            name: "Neville Longbottom",
            status: "Alive",
            bio: "Turned out to be super hot. Luna's a lucky woman.",
            backgroundColor: "green" 
        },
        {
            name: "Sirius Black",
            status: "Deceased",
            bio: "The deranged godfather who never matured. Probably because he was in azkaban for so long.",
            backgroundColor: "orange" 
        },
        {
            name: "Hedwig",
            status: "Deceased :(",
            bio: "A super nice owl that died for Harry. For sure wasn't worth it.",
            backgroundColor: "lightgrey",
            color: "black"
        },
        {
            name: "Voldemort",
            status: "Deceased...or is he?",
            bio: "The Dark Lord. The most magnificent wizard who ever lived. Harry killed him. LONG LIVE LORD VOLDEMORT.",
            backgroundColor: "white",
            color: "black"
        }
    ]
    return (
        <div className="card-wrapper">
            {info.map((character) => {
                return <Boxes {...character}></Boxes>
            })}
        </div>
    )
}

export default Content;
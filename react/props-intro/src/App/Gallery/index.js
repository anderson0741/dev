import React, { Component } from "react";
import Picture from "./Picture";
import "./index.css";

function Gallery(props) {

    let picData = [
        {
            caption: "OMFG SO CUUUUUUUTE",
            author: "Mr. Catt",
            backgroundUrl: "https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg"
        },
        {
            caption: "NO WAY I JUST.... I  JUST CANT EVEN",
            author: "Mrs. Catt",
            backgroundUrl: "https://static.pexels.com/photos/62321/kitten-cat-fluffy-cat-cute-62321.jpeg"
        },
        {
            caption: "Ya thats ok",
            author: "Mr. Kitty",
            backgroundUrl: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/4e34feee0acdc38a?w=400&h=400"
        },
        {
            caption: "This is unreasonably cute",
            author: "serialKitty",
            backgroundUrl: "data:image/jpeg;base64,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"
        }
    ]
    return (
        <section className="gallery-wrapper">
            {picData.map((picInfo, index) => {
                return <Picture {...picInfo} key={index}></Picture>
            })}
            <Picture></Picture>
        </section>
    )
}

export default Gallery;
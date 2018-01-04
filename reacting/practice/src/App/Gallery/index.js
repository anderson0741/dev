import React, { Component } from "react";
import Picture from "./Picture";
import "./index.css";

function Gallery(props) {
    // let picData = [
    //     {
    //         caption: "amazing"
    //         author:"Car"
    //         backgroundUrl: "http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2018/performance/camaro/mov/01-images/2018-camaro-performance-25.jpg?imwidth=1200"
    //     }
    // ]
    <section className="gallery-wrapper">
        <Picture caption="oh my" author="mr catt" backgroundUrl="http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2018/performance/camaro/mov/01-images/2018-camaro-performance-25.jpg?imwidth=1200"></Picture>
        <Picture caption="oh lawl" author="mr patr" backgroundUrl="http://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2018/performance/camaro/mov/01-images/2018-camaro-shared-13.jpg?imwidth=1200"></Picture>
        <Picture caption="ma lawl" author="mr cam" backgroundUrl="https://media.ed.edmunds-media.com/chevrolet/camaro/2015/oem/2015_chevrolet_camaro_coupe_zl1_fq_oem_1_1280.jpg"></Picture>
        {/* <Picture caption="ma" author="cam" backgroundUrl="https://cnet4.cbsistatic.com/img/JQkbFk8wU_4nHmDJssygSX5d_Os=/724x407/2017/06/27/dd1d40bd-0648-443d-b189-a78cde5ef586/2018-chevrolet-camaro-zl1-1le-7.jpg"></Picture> */}
    </section>
}

export default Gallery;
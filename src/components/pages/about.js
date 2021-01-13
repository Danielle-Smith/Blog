import React from "react";
import aboutImg from "../../../static/assets/images/auth/IMG_5563.jpg";

export default function () {
    return (
        <div className="about-page-wrapper">
            <div
                className="about-image"
                style={{
                        backgroundImage: `url(${aboutImg})`
                    }} 
            />
            <div className="about-bio">
                <p>Hi! I am Emily Davis, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2007. I enjoy creating beautifully designed, intuitive and functional websites.</p>
            </div>
        </div>
    );
}
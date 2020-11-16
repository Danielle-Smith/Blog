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
                <p>Nunc um augue lectus sed ornare. Mauris efficitur est sed lorem fermentum tempor vitae eget lacus. Mauris mattis purus vel quam egestas tristique. Curabitur massa felis, iaculis id blandit nec, rutrum et massa. Quisque ante urna, efficitur eget urna vel, ornare laoreet nunc. In ut elit ultricies, tempor tellus ac, pretium dolor. Aenean imperdiet tortor in dolor ullamcorper, non lacinia lectus egestas. Curabitur mollis vestibulum ante, eget egestas neque elementum sed. Pellentesque id ipsum non mi euismod maximus.</p>
            </div>
        </div>
    );
}
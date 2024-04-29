import React from "react";

function AboutSection(props) {

    return (
        <div className={`about-section ${props.darkmode ? 'dark' : ''}`}>
        <h2>{props.data.text}</h2>
        </div>
    );
}

export default AboutSection;
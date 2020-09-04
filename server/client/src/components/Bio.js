import React from "react";
import '../styles/Bio.css';
import JoannaHeadshot from '../assets/headshot1.jpg';


const Bio = () => {
    return (
        <div id="bio">

            {/* Headshot */}
            <img id="headshot" src={JoannaHeadshot} alt="Joanna Headshot" />

            {/* Bio */}
            <p className="bio-text">
                Full Stack Software Engineer with a background in Team Leadership and Customer Service. My past experience has given me opportunities to enhance my communication skills and collaborate with diverse teams, as well as helping me strengthen my ability to keep a calm and positive attitude even in high-pressure situations.
            </p>
            <p className="bio-text">
                My desire for growth and new challenges, combined with a love for learning, problem-solving, and creativity led me down the path of technology. In the past year I have discovered a passion for programming and have dedicated myself to building my skills and investing in my education in order to make this career shift into Software Engineering. I am loving what I’m doing and excited to bring my passion and experience with me on this journey.
            </p>

        </div>
    )
}

export default Bio;
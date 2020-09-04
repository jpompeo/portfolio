import React from 'react';
import YouTube from '@u-wave/react-youtube';
import '../styles/Demo.css';

const Demo = () => {
    return (
        <div id="demo-writetrack">
            <h1>Capstone Project: <a href="http://write-track.herokuapp.com">Write Track</a></h1>
            <p><strong>Technologies:</strong> React, Redux, React-Bootstrap, Node.js, Express, MongoDB, Mongoose, Chart.js</p>
            <p><strong>Description:</strong>Developed for authors in the process of writing a book, this app assists with setting goals, tracking progress, and planning out steps. Writing a book is a long process, and it’s easy to lose momentum along the way. Write Track is designed to keep writers motivated with the visualization of progress and celebration of achievements every step of the way.</p>
            <h2>Demo:</h2>
            <YouTube
                video="zuL34MyogEw"
                startSeconds={(60 * 37) + 17}
                endSeconds={(60 * 45) + 1}
                width={560}
                height={315}
                allowFullscreen
            />
        </div>
    )
}

export default Demo;
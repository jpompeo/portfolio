import React from 'react';
import YouTube from '@u-wave/react-youtube';
import '../styles/Demo.css';

const Demo = () => {
    return (
        <div id="demo-video">

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
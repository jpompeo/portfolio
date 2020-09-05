import React from 'react';
import YouTube from '@u-wave/react-youtube';
import '../styles/Cohort.css';

const Cohort = () => {
    return (
        <div id="demo-muze">
            <h1>Cohort Project: <a href="http://muze-network.herokuapp.com">Muze Virtual Networking</a></h1>
            <p><strong>Technologies: </strong>Socket.IO, React, Redux, React-Bootstrap, Node.js, Express, MongoDB, Mongoose</p>
            <p><strong>Description: </strong>Collaborating with 9 other Software Engineers in an Agile environment, this real-time chat application was developed for hosting virtual events in which users can participate in multiple conversations simultaneously, create new chats on custom topics, and engage in virtual networking.</p>
            <p><strong>My Contributions: </strong> As we were given a new technology to utilize for this app, Socket.io, I took point on learning about and implementing sockets, which were integral to the chat boxes as well as to tracking active users. I was able to deliver a special feature beyond MVP to display to a user when other users were typing, as well as when they entered and left chatrooms. In addition, I assisted with planning out the structure of the API, helped with deployment to Heroku, and supported other members of my cohort with troubleshooting and debugging their code.</p>
            <h2>Demo:</h2>
            <div class="demo-video">
            <YouTube
                video="zuL34MyogEw"
                startSeconds={(60 * 8) + 33}
                endSeconds={(60 * 20) + 3}
                width={560}
                height={315}
                allowFullscreen
            />
            </div>
        </div>
    )
}

export default Cohort;
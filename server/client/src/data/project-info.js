import TestProjectImage from '../assets/testprojectimg.PNG';
import CodeSample from '../assets/codesample.PNG';

export const projectInfo = [
        {
            id: 'project1',
            title: 'Write Track',
            stack: 'Full Stack',
            type: 'Individual',
            summary: 'Designed for authors intending to write a book, this application allows users to set goals, track updates, plan out chapters, and visualize their progress with a graphic dashboard and chart analytics.',
            tech: 'Developed with React, Redux, Node.js, and Express, utilizing MongoDB for data storage and Chart.js for data visualization',
            imageApp: TestProjectImage,
            imageCode: CodeSample,
            linkApp: 'http://write-track.herokuapp.com',
            linkCode: 'https://github.com/jpompeo/writing-app'
        },
        {
            id: 'project2',
            title: 'Muze Networking',
            stack: 'Full Stack',
            type: 'Collaborative',
            summary: 'This real-time chat application is intended for hosting virtual events in which users can participate in multiple conversations simultaneously, create new chats on custom topics, and engage in virtual networking.',
            tech: 'Utilized Socket.IO with React, Redux, Node.js, Express, and MongoDB, working with nine other software engineers in an Agile environment.',
            imageApp: TestProjectImage,
            imageCode: CodeSample,
            linkApp: 'http://muze-network.herokuapp.com',
            linkCode: 'https://github.com/spaldingVance/Virtual-Networking'
        },
        {
            id: 'project3',
            title: 'Eccentric Essentials',
            stack: 'Full Stack',
            type: 'Individual',
            summary: 'This Full Stack shopping app allows users to search products by keyword, filter by category, and sort by price, utilizing server-side parsing and pagination and a REST API to efficiently send data from the server to the client.',
            tech: 'Utilizing Redux for state management, this app uses React on the Front End and a RESTful API built with Node.js and Express on the Back End.',
            imageApp: TestProjectImage,
            imageCode: CodeSample,
            linkApp: '',
            linkCode: 'https://github.com/jpompeo/product-list'
        },
        {
            id: 'project4',
            title: 'Sunglasses.io',
            stack: 'Back End',
            type: 'Individual',
            summary: 'Practicing Test Driven Development and proper documentation of code, this Back End application was created to support a mock sunglasses storefront, utilizing a RESTful API and user authentication.',
            tech: 'This server-side application was built with Node.js, produces 60+ tests with Mocha and Chai, and documents the REST API with Swagger',
            imageApp: TestProjectImage,
            imageCode: CodeSample,
            linkApp: '',
            linkCode: 'https://github.com/jpompeo/sunglasses-io'
        },
        {
            id: 'project5',
            title: 'Bespoke Books',
            stack: 'Front End',
            type: 'Collaborative',
            summary: 'Intended as a curated collection of book titles, this app allows users to find book suggestions by theme and add recommendations without arbitrary star ratings, allowing for a more meaningful user experience.',
            tech: 'Partnering with 1 other Software Engineer in a 2-day Hackathon, this app was built on React, utilizing Redux for state management and Google Books API for data.',
            imageApp: TestProjectImage,
            imageCode: CodeSample,
            linkApp: '',
            linkCode: 'https://github.com/jpompeo/bespoke-books'
        },
        {
            id: 'project6',
            title: 'Breakfast Club Contacts',
            stack: 'Front End',
            type: 'Individual',
            summary: 'Intended as a modern-day Rolodex, this application allows a user to organize their contact list, with the ability to add, remove, edit, or view details of all personal contacts.',
            tech: 'Created with React, this Front End application utilizes React Router for navigation and CSS3 with Bootstrap for styling.',
            imageApp: TestProjectImage,
            imageCode: CodeSample,
            linkApp: '',
            linkCode: 'https://github.com/jpompeo/contact-list'
        }
]




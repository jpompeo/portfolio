import wtCode from '../assets/code-samples/wtcode.PNG';
import bbCode from '../assets/code-samples/bbcode.PNG';
import clCode from '../assets/code-samples/clcode.PNG';
import sgCode from '../assets/code-samples/sgcode.PNG';
import muzeCode from '../assets/code-samples/muzecode.PNG';
import plCode from '../assets/code-samples/plcode.PNG';
import wtApp from '../assets/screenshots/wtscreenshot.png';
import bbApp from '../assets/screenshots/bbscreenshot.png';
import clApp from '../assets/screenshots/clscreenshot.png';
import muzeApp from '../assets/screenshots/muzescreenshot.png';
import plApp from '../assets/screenshots/plscreenshot.png';
import sgApp from '../assets/screenshots/sgscreenshot.png';


export const projectInfo = [
        {
            id: 'write-track',
            title: 'Write Track',
            stack: 'Full Stack',
            type: 'Individual',
            summary: 'Designed for authors intending to write a book, this application allows users to set goals, track updates, plan out chapters, and visualize their progress with a graphic dashboard and chart analytics.',
            tech: 'Developed with React, Redux, Node.js, and Express, utilizing MongoDB for data storage and Chart.js for data visualization',
            imageApp: wtApp,
            imageCode: wtCode,
            linkApp: 'http://write-track.herokuapp.com',
            linkCode: 'https://github.com/jpompeo/writing-app'
        },
        {
            id: 'muze-networking',
            title: 'Muze Networking',
            stack: 'Full Stack',
            type: 'Collaborative',
            summary: 'This real-time chat application is intended for hosting virtual events in which users can participate in multiple conversations simultaneously, create new chats on custom topics, and engage in virtual networking.',
            tech: 'Utilized Socket.IO with React, Redux, Node.js, Express, and MongoDB, working with nine other software engineers in an Agile environment.',
            imageApp: muzeApp,
            imageCode: muzeCode,
            linkApp: 'http://muze-network.herokuapp.com',
            linkCode: 'https://github.com/spaldingVance/Virtual-Networking'
        },
        {
            id: 'peculiar-products',
            title: 'Peculiar Products',
            stack: 'Full Stack',
            type: 'Individual',
            summary: 'This Full Stack shopping app allows users to search products by keyword, filter by category, and sort by price, utilizing server-side parsing and pagination and a REST API to efficiently send data from the server to the client.',
            tech: 'Utilizing Redux for state management, this app uses React on the Front End and a REST API built with Node.js and Express on the Back End.',
            imageApp: plApp,
            imageCode: plCode,
            linkApp: 'http://peculiar-products.herokuapp.com/',
            linkCode: 'https://github.com/jpompeo/product-list'
        },
        {
            id: 'sunglasses-io',
            title: 'Sunglasses.io',
            stack: 'Back End',
            type: 'Individual',
            summary: 'Practicing Test Driven Development and proper documentation of code, this Back End application was created to support a mock sunglasses storefront, utilizing a REST API and user authentication.',
            tech: 'This server-side application was built with Node.js, produces 60+ tests with Mocha and Chai, and documents the REST API with Swagger',
            imageApp: sgApp,
            imageCode: sgCode,
            linkApp: 'https://github.com/jpompeo/sunglasses-io/blob/master/swagger-sunglasses.yaml',
            linkCode: 'https://github.com/jpompeo/sunglasses-io'
        },
        {
            id: 'bespoke-books',
            title: 'Bespoke Books',
            stack: 'Front End',
            type: 'Collaborative',
            summary: 'Intended as a curated collection of book titles, this app allows users to find book suggestions by theme and add recommendations without arbitrary star ratings, allowing for a more meaningful user experience.',
            tech: 'Partnering with another Software Engineer in a 2-day Hackathon, this app was built on React, utilizing Redux for state management and Google Books API for data.',
            imageApp: bbApp,
            imageCode: bbCode,
            linkApp: 'https://bespoke-books.netlify.app/',
            linkCode: 'https://github.com/jpompeo/bespoke-books'
        },
        {
            id: 'breakfast-club-contacts',
            title: 'Breakfast Club Contacts',
            stack: 'Front End',
            type: 'Individual',
            summary: 'Intended as a modern-day Rolodex, this application allows a user to organize their contact list, with the ability to add, remove, edit, or view details of all personal contacts.',
            tech: 'Created with React, this Front End application utilizes React Router for navigation and CSS3 with Bootstrap for styling.',
            imageApp: clApp,
            imageCode: clCode,
            linkApp: 'https://breakfast-club-contacts.netlify.app/',
            linkCode: 'https://github.com/jpompeo/contact-list'
        }
]




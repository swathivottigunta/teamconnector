# Team Connector - React, Redux, Express/Node, MongoDB, JWT, Bcrypt - 

This is the social network app for developers to connect with each other. 
Developers can add/edit/view their profile(includes experience, education, fetch github projects using Web API), add a post(where developers can like the post, unlike the post, add a comment or delete comment on a post). 
Building an extensive backend API with Node.js & Express. 
Protecting routes/endpoints with JWT (JSON Web Tokens). 
Redux is used for state management.

## Preview
This project is currently live at https://ancient-fortress-38467.herokuapp.com/

## Dependencies
### Server
"bcryptjs": "^2.4.3",
"config": "^3.3.1",
"express": "^4.17.1",
"express-validator": "^6.4.1",
"gravatar": "^1.8.0",
"jsonwebtoken": "^8.5.1",
"mongoose": "^5.9.12",
"request": "^2.88.2"
### Client
"axios": "^0.19.2",
"moment": "^2.26.0",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-moment": "^0.9.7",
"react-redux": "^7.2.0",
"react-router-dom": "^5.2.0",
"react-scripts": "3.4.1",
"redux": "^4.0.5",
"redux-devtools-extension": "^2.13.8",
"redux-thunk": "^2.3.0",
"uuid": "^8.1.0"

## Dev Dependencies
"concurrently": "^5.2.0",
"nodemon": "^2.0.3"

## Installations
<ol>
<li>Add Key Dependencies("mongoURI", "jwtSecret", "githubClientId", "githubSecret") to the given file - /config/db.json</li>
<li>Run node server to start the Express app</li>
<li>Run npm start from the client directory to start the React app</li>
<li>Visit http://localhost:3000/</li>
</ol>

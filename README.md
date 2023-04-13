# Node.js CRUD & Data Visualization Web App

Demonstration link is coming soon! Once I deploy the application, this section will be updated.

## Description
This project is a trivia game inspired by the American television game show of the same name. Unlike the TV show however, this application allow for two players/teams to compete to identify the person, place, thing, or idea that the question/clue describes. The web application demonstrates my knowledge in the MERN stack (MongoDB, Express, React.js, and Node.js) architecture. All questions, answers, team names, and team scores are stored in, retrieved from, and/or updated to MongoDB from the backend files.

As it currently stands, the project is partially functional, as one of the feature remains incomplete. There are however no game-breaking bugs in this web application. More details are shared in the following section.

## Improvements in Progress (as of April 13, 2023)
Below is a bucket list of improvements / functionalities I would like to add onto this project:
* Utilize exception handling to improve the performance of the web application.
* Make the application's design more responsive.
* Lock specific question button upon clicking and answering of the question.
* Code clceaning. Specifically, separate question buttons into child components to make the code more organized and potentially improve the performance of the application.
* A revision on the the logic of UI/UX, to make the game more user friendly.
* Addition of a rules page to be displayed before the game begins, enhancing the user's understanding on how the application is meant to function.
* A feature for users to edit the questions and answers of the web application, improving on the game's replayability.
* A reset button to reset the game to its original state for replayability.
* The addition of Firebase, allowing user authentication and account to sign up and have their own custom Family Feud game.

## Framework / Libraries Used
Below is a complete list of libraries used within this project:
* [React.js](https://react.dev/) - JavaScript framework responsible for creating interactive user interfaces for this web application.
* [Node.js](https://nodejs.org/en/about) - Back-end JavaScript runtime environment
* [Express.js](https://expressjs.com/) - Node.js web application framework, providing a variety of feature for building this web app. So far, it is primarily used for database.
* [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) - Driver allowing the web application to work with MongoDB in JavaScript.
* [AXIOS](https://axios-http.com/docs/intro) - Promised-based HTTP client for JavaScript / Node.js, allowing for data transfer & communications with JSON format between the frontend and backend of the web application.

## How to Run / Use the Project
At the moment, this project has not yet been deployed since it is still in development. However, if you're interested in running this application, you can follow the steps below:
1. Download the project / clone this repository onto Visual Studio Code or IDE of your choice.
2. After cloning the repository, navigate over to the frontend directory using `cd frontend` and run the `npm start` command in the IDE's terminal to determine what dependencies need to be installed for the project to run. Run `npm install` with the proceeding module name to install the required dependencies.
3. Navigate over to the backend directory and over to the `src` folder from the terminal using the `cd ../backend/src` command, and run the `node server.js` command to see if there are any missing dependencies that need to be installed in the backend. If so, proceed to run the `npm install` to install those missing dependences just as it was done in the frontend directory.
4. Once all dependencies are added to the project, make sure to run the `node server.js` command first to start the application's server. In a separate terminal, navigate to the front end and run the `npm start` command. Ensure that both terminals are running simultaneously. In an event that the browser does not open, simply open your internet browser and type in `https://localhost:3000/`and the web application should work from there!

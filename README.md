# Node.js CRUD & Data Visualization Web App

![nodeproject](https://user-images.githubusercontent.com/105457925/231934726-7f9f626d-3e99-4856-aa77-8a027de7c197.png)


## Description
This application is a CRUD app built with JavaScript and the Node.js runtime environment, and contains data visualization for the data within the application. This project was developed as an academic project during my final semester at Algonquin College, and served as my first project using Node.js. With this project I applied project planning, research, testing, and the implementation of advanced concepts from past courses for this Node.js project.

The entire project was split into four different assignments, each serving as steps to completing the application in its entirety. Although not included in this respository, I used the [ProjectLibre](https://www.projectlibre.com/products) for the project planning portions of each assignment and was expected to plan out my self study in order to meet the deadlines. Below details the objectives of each assignment:

* Part 1: Get the following CSV [dataset](https://open.canada.ca/data/en/dataset/1d41c12a-4d33-8992-e651-d76e481c7862/resource/51bdbad9-d6c2-4c9e-9bef-7ea0edbb3887?inner_span=True) to be outputted onto the console log.
* Part 2: Render the CSV onto the client's browser, and allow them to download the CSV file. Additionally, reorganize the project structure in an MVC architecture.
* Part 3: Get the application to load the dataset from an RDBMS (MySQL), and allow users to view the dataset, edit each entry within the dataset, and delete the data.
* Part 4: Use and integrate a library to visualize the dataset.

## Framework / Libraries Used
Below is a complete list of libraries used within this project:
* [Node.js](https://nodejs.org/en/about) - Back-end JavaScript runtime environment
* [Express.js](https://expressjs.com/) - Node.js web application framework, providing a variety of feature for building this web app. So far, it is primarily used for database.
* [MySQL](https://www.mongodb.com/docs/drivers/node/current/) - Allows JavaScript to obtain data from local MySQL database.

## How to Run / Use the Project

IMPORTANT: To run this project, you must have a local MySQL database set up on your computer, and the following [dataset](https://open.canada.ca/data/en/dataset/1d41c12a-4d33-8992-e651-d76e481c7862/resource/51bdbad9-d6c2-4c9e-9bef-7ea0edbb3887?inner_span=True) within the databse.

At the moment, this project has not yet been deployed since it is still in development. However, if you're interested in running this application, you can follow the steps below:
1. Download the project / clone this repository onto Visual Studio Code or IDE of your choice.
2. After cloning the repository, navigate over to the frontend directory using `cd frontend` and run the `npm start` command in the IDE's terminal to determine what dependencies need to be installed for the project to run. Run `npm install` with the proceeding module name to install the required dependencies.
3. Navigate over to the project's main directory, and run the `node app.js` command to run the project in the terminal.
4. If necessary, ensure that all dependencies are installed utilizing the `npm install` command for each dependency.

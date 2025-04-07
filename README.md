###### Book Review App

## About the App
A simple web application built with Express.js and Node.js for managing book reviews. User can add, edit and delete the reviews. Reviews are created with a form. 

## Links
- GitHub Repository: https://github.com/00018737-BIS/book-review-app-00018737
- Hosted App: 

## how to run through app locally?

1. git clone https://github.com/00018737-BIS/book-review-app-00018737

2. on terminal: cd book-review-app

3. on terminal: npm install

4. create .env file and write:
PORT=5000

5. on terminal: npm start

6. on browser: http://localhost:5000

## Dependencies

express: ^4.18.2 - Core framework for building the web application.

pug: ^3.0.2 - Template engine for rendering views.

dotenv: ^16.4.5 - Loads environment variables from .env.

express-validator: ^7.0.1 - Validates and sanitizes user inputs.

nodemon: ^3.1.0 (dev dependency) - Automatically restarts the server during development

## Project Structure 

app.js              Main application. Sets up Express and routes
package.json        Configuration and dependencies of the app
.gitignore          Deletes node_modules and .env from git visibility
.env                Environment variables (PORT:5000)
/public             Assets for UI
    /images         File for images
    /javascripts    File for JS files needed for UI front end
    /styles
       style.css    CSS files for UI 
/routes             Routes for HTTP requests
    index.js        Routes for main page
    reviews.js      Routes for CRUD operations
/views              Pug templates for the UI
    index.pug       Homepage where is the review list
    layout.pug      Base layout with header, footer, and styles
    review-form.pug Form for creating and editing reviews
/controllers        Logic for routes
    index.js        Logic for homepage
    reviews.js      Controls CRUD operations
/services           Service layer for data base
    reviews.js      Memory storage and logic for reviews
README.md           Docummentation file that you are reading 

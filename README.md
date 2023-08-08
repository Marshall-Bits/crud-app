# FULLSTACK CRUD APP

This application is created with Ironlauncher and it is a fullstack CRUD app. It is a simple app that allows you to create, read, update and delete a list of books.

## Installation

1. Clone this repo (fork it before if you plan on making any changes)
2. Run `npm install`
3. Create a `.env` file in the root of the project and add the following:

```
PORT=3000
MONGODB_URI=<your-mongodb-uri-here>
```
4. Run `npm run dev` or `nodemon server.js` to run the app in development mode.
5. Navigate to `http://localhost:3000` to see the app running in the browser.

## Technologies used

- Node.js
- Express
- MongoDB
- Mongoose
- Handlebars

### My mongoDB doesn't have any books in it!
Remember we created a seed file for you to run. You can run it by typing `node bin/seeds.js` in your terminal. This is going to create 10 books in your database.

### About the Routes
Remember to use the folder `routes` to create your new routes.
We are not creating the routes in the `server.js` file or the `app.js` file anymore.

### About the Models
Notice we also have a folder for the models. This is where we will create our models and schemas.
A good practice is to create them in a separate file.


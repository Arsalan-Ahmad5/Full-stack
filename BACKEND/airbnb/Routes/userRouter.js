//core modules
const path = require('path');
//external modules
const express = require('express');
//local modules
const rootDir = require('../utils/pathUtil');
const userRouter = express.Router();
const {registeredHome} = require('./hostRouter');

userRouter.get("/",(req, res, next) => {
    // console.log(`${req.method} ${req.url}`);
    // res.send(`<h1>Welcome to AirBNB Clone</h1>
    //     <a href="/add-home">Add Home</a><br>`);
    console.log("Registered Homes:", registeredHome);
    res.render('home', { registeredHome }); // Pass registeredHome to the view
});
module.exports = userRouter;
//core imports
const path = require('path');
//external imports
const express = require('express');
//local imports
const rootDir = require('../utils/pathUtil');
const hostRouter = express.Router();

hostRouter.use(express.urlencoded());
hostRouter.get("/host/add-home",(req, res, next) => {
    // console.log(`${req.method} ${req.url}`);
    res.sendFile(path.join(rootDir, "./Views/addHome.html"));
});

const registeredHome=[];
hostRouter.post("/host/add-home",(req, res, next) => {
    // console.log(`${req.method} ${req.url}`);
    console.log("Home added:", req.body, req.body.homeName);
    registeredHome.push({ name: req.body.homeName });
    res.sendFile(path.join(rootDir, "./Views/homeAdded.html"));
});
exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;
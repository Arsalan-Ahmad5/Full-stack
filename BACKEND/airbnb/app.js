const path = require('path');
const express = require('express');
//local module
const userRouter = require('./Routes/userRouter');
const {hostRouter} = require('./Routes/hostRouter');
const rootDir = require('./utils/pathUtil');

const app = express();
const port = 3005;
app.set('view engine', 'ejs');


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(userRouter);

app.use(hostRouter);
app.use(express.static(path.join(rootDir, 'Public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "./Views/404.html"));
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
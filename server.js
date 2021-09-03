const express = require('express');
const app     = express();
require('dotenv').config();
const homeRouter = require('./routes/home');
const processRouter = require('./routes/process');
app.use(homeRouter);
app.use(processRouter);

app.all('/*', (req, res, next) => {
    res.json({message: 'Page not found !!',status: 404});
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).json({err:err});
})

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
    console.log('Press Ctrl-C to Stop');
});
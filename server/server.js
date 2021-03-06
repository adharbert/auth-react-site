// Main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');


// DB Setup
const db = 'mongodb://127.0.0.1:27017:auth/auth';
const config = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
mongoose.connect(db, config)
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));


// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on: ' + port);





/*
    // Comman Prompt, getting Mongo running locally:
    - Run command prompt in Administrative.
    - change directory to C:\Program Files\MongoDB\Server\4.2\bin    
    - run command: "mongod"
    --- to change directory of database use:  mongod --dbpath="C:\data\mongo\db"

    // Parts to node service:
    1. We have our routes
    2. set up passport middleware
    3. controllers to handle the requests
    4. services handle the passport logic


*/
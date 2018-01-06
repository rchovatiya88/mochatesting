// Calling Express Server
const express = require('express');

// setting the variable app to express
var app = express();

// app is routes to the home page http request 
app.get('/', (req, res) =>{ // req = http request , res = response 
    res.status(404).send({ // create an json object
        error: 'Page Not Found.',
        name: 'Todo App v1.0'
    }); 
});

app.listen(3000); // listen on port 3000

// export the app so 'supertest' can use the app response and requests
module.exports.app = app; 

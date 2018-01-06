// Use supertest library to help you test API Json Response
const request = require('supertest'); 
const expect = require('expect');
// Get the variable app from server.js 
var app = require('./server').app;

// Write the Mocha test 
it('should return hello world response', (done) => {
    request(app) // make a request to the app 
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not Found.'
            });
        })
        .end(done);
});
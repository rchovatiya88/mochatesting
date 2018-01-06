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
                error: 'Page Not Found.'
            });
        })
        .end(done);
});


// Make a new test
// assert 200
// Assert that you exist in users array

it('should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
            .expect((res) =>{
                expect(res.body).toInclude({
                    name: 'Ronak',
                    age: 29
                });
            })
        .end(done);
});
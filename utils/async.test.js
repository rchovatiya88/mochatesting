const expect = require('expect');
const async = require('./async');

it('should aysnyc test', (done) => {
   async.asyncAdd(4 ,3, (sum) => {
        expect(sum).toBe(7).toBeA('number')
    done();
    });
});

it('should aysnyc square', (done) => {
    async.asyncSquare(10, (sum) => {
         expect(sum).toBe(100).toBeA('number')
     done();
     });
 });

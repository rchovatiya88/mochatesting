const expect = require('expect');
const utils = require('./utils');


it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`)
  // }  This is to throw an error
});

it('should square the number', () => {
  var res = utils.square(10);

  expect(res).toBe(100).toBeA('number');
  // if (res !== 100) {
  //   throw new Error(`Expected 100, but got ${res}.`)
  // }
});

it('should expect some values', () => {
  expect(12).toNotBe(11); // good for numbers, boolean
  expect([2,3,4]).toExclude(1);
  expect({
    name:'Andrew',
    age: 25,
    location: 'Philadelphia'
  }).toInclude({
    age: 25
  })
});

// should verify first and last name are set
// assert it includes firstName and lastName with proper values.

it('should set firstName and lastName', () => {
  var user = {location: 'new jersey.', age: 28};
  var res = utils.setName (user, 'Ronak Chovatiya');

  expect(res).toInclude({
    firstName: 'Ronak',
    lastName: 'Chovatiya'
  });
  
  expect(user).toEqual(res);
});
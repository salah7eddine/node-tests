const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(20, 77);
    
      expect(res).toBe(97).toBeA('number');
    
      // if(res != 97){
      //   throw new Error(`Expected 97, but got ${res}.`);
      // }
    });
  });

  
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
  
  
  it('should square a number', () => {
    var res = utils.square(3);
  
    expect(res).toBe(9).toBeA('number');
  
    // if(res != 81){
    //   throw new Error(`Expected 81, but got ${res}.`)
    // }
  });
  
  it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  });  
});



// should verify first and last names are set
// assert it includes firstName and lastName with proper values


it('should set firstName and lastName', () => {
  var user = {location:'Beni Mellal', age: 17};
  var res = utils.setName(user, 'Meryem Abousaid');

  expect(user).toBeA('object').toInclude({
    firstName:'Meryem',
    lastName: 'Abousaid'
  })
  
  //expect(user).toEqual(res);
})

// it('should expect some value', () => {
//   //expect(12).toNotBe(12);
//   //expect({name: 'Abousaid'}).toEqual({name: 'Abousaid'});
//   //expect({name: 'abousaid'}).toNotEqual({name: 'Abousaid'});
//   //expect([2,3,4]).toInclude(3);
//   //expect([2,3,4]).toExclude(7);
//   expect({
//     name: 'Abousaid',
//     age:24,
//     location:'Rabat'
//   }).toInclude({
//     age:24
//   });

// });
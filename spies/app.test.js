const expect = require('expect');
var rewire =require('rewire');


var app = rewire('./app');
//app.__set__
//app.__get__

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy coorectly', () => {
    var spy = expect.createSpy();
    spy('Hajar', 21);
    //expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Hajar', 21);
  });

  it('should call saveUser with user object', () => {
    var email = 'abousaid7salah@gmail.com';
    var password = '123abc';

    app.handleSignup(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })

});
var Person = require("./person.js");
var Dog = require("./dog.js");
var assert = require('chai').assert;

describe("Person", function() {

  it('should have a name and a dog', function() {
    var luna = new Dog({ name: 'Luna', age: 3 });
    // 2 args: need 2 params in constructor - firstName, dog
    var trisha = new Person('Trisha', luna);
    // this.name property - VALUE: 1st arg/param

    assert.equal(trisha.name, 'Trisha');
    // this.dog property - VALUE: 2nd arg/param
    assert.instanceOf(trisha.dog, Dog);
    // how will i make dog.name? needs to be name of property of dog instance
    assert.equal(trisha.dog.name, 'Luna');
  })

  it.skip('should be able to have no dog', function() {
    var dawn = new Person({ name: 'Dawn' });

    assert.equal(dawn.dog, undefined);
  })

  it.skip('should feed dog', function() {
    var toph = new Dog({ name: 'Toph', age: 2.5});
    var nick = new Person('Nick', toph);

    assert.equal(toph.hungry, true);

    nick.fillFoodBowl();

    assert.equal(toph.hungry, false);
  })

  it.skip('should play with dog', function() {
    var wren = new Dog({ name: 'Wren', age: 5});
    var leah = new Person('Leah', wren);

    var pupPlayTime = leah.throwBall();

    assert.equal(pupPlayTime, 'Wren loves playing fetch!');
  })

  it.skip('should notice when dog no longer wants to play', function() {
    var connie = new Dog({ name: 'Conrad', age: 0.5});
    var kari = new Person('Kari', connie);

    var firstThrow = kari.throwBall();
    var secondThrow = kari.throwBall();

    assert.equal(secondThrow, 'Conrad loves playing fetch!');

    var thirdThrow = kari.throwBall();

    assert.equal(thirdThrow, 'Oh, I think Conrad is too tired. I guess we won\'t play fetch right now.');
  })

  it.skip('should be able to adopt a dog if they don\'t already have one', function() {
    var dawn = new Person('Dawn');

    dawn.adoptAPup('Rocky', 2);

    assert.instanceOf(dawn.dog, Dog);
    assert.equal(dawn.dog.name, 'Rocky');
    assert.equal(dawn.dog.age, 2);
  })

  it.skip('should not be able to adopt a dog if they already have one', function() {
    var cap = new Dog({ name: 'Cap', age: 0.5});
    var kayla = new Person('Kayla', cap);

    var adoptionAttempt = kayla.adoptAPup('Chloe', 1);

    assert.equal(kayla.dog.name, 'Cap');
    assert.equal(adoptionAttempt, 'You can\'t adopt Chloe. You already have Cap!');
  })

})

class Dog {
  constructor(pet) {
    this.name = pet.name;
    this.age = pet.age;
    this.hungry = true;
    this.energyLevel = 5;
  }

  // make a dog class
    // make a constructor for an object
      // add parameters:
        // name
        // age
        // hungry = true
        // energy = 5

  eat() {
    if(this.hungry) {
      this.hungry = false;
    } else {
      return `I refuse to eat.`;
    }
  }

  // make eat() method
    // if hungry
      // no longer hungry
    // if not hungry
      // refuse to eat

  fetchBall() {
    if(this.energyLevel > 3) {
      this.energyLevel--;
      return `This is fun!`;
    } else {
      return `Nah, I'm going to sleep instead.`;
    }
  }

  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel++;
    } else {
      return `I have too much energy to rest. I'm going to chew something instead.`;
    }
  }

}

module.exports = Dog;

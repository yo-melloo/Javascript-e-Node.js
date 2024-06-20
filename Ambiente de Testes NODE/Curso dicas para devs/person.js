class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Meu nome é ${this.name}!`;
  }
}

module.exports = { Person };

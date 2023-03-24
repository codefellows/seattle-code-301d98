class Animal {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.age = props.age;
  }
}

class Dog extends Animal {
  constructor(props, type) {
    super(props);
    this.type = type;
  }

  speak = () => {
    console.log(`${this.name} barks!`);
  }

  goodBoi = () => {
    console.log(`${this.name} is a good ${this.type}`)
  }
}

const spot = new Dog({name:'Spot', color:['black', 'white'], age:10}, 'dalmation');

spot.speak();
spot.goodBoi();

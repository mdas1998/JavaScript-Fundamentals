let obj = {
  a : 1,
  b : "Micheal"
};

console.log(obj); 

let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; //  sets rabbit.[[Prototype]] = animal


class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...")
  }
  eats() {
    console.log("Kha raha hu");
  }
  jumps() {
    console.log("Have mey kud raha hu");
  }
  hug() {
    console.log("Hug raha hu");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name)
    console.log("Lion object is created");
  }
  eats() {
    super.eats();
    console.log("Sher kha raha hai");
  }
}

let a = new Animal("Bunny")
console.log(a);

let l = new Lion("Shera");
console.log(l);

// getters and setters 

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name; 
  }

  set name(value) {
    if (value.length < 4 ) {
      console.log("Name is too short");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
console.log(user.name);


// alternate way to set 

user.name = "as";


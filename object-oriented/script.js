// Part One

// Create a class for vehicle. Each vehicle instance should have the following properties:
// make
// model
// year
// Each vehicle instance should have access to a method called honk, which returns the string “Beep.”
// Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "beep";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
};

const newV = new Vehicle('Ford', 'F150', 2006);
//


// Part Two
// Create a class for a car. The Car class should inherit from Vehicle and each car 
//...instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

const newCar = new Car('Toyota', 'Camery', 2013);
//


// Part Three
// Create a class for a Motorcycle. This class should inherit from Vehicle and each 
//...motorcycle instance should have a property called numWheels which has a value of 2. 
//...It should also have a revEngine method which returns “VROOM!!!”

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

const newMotorcycle = new Motorcycle("Harley", "ST5000", 1999);
//


// Part Four
// Create a class for a Garage. It should have a property called vehicles which will store an 
//array of vehicles, and a property called capacity which is a number indicating how many 
//vehicles will fit in the garage. When you create a garage, vehicles will always be empty; 
//you only need to provide the capacity.

// A garage should also have an add method, which attempts to add a vehicle to the array of 
//vehicles. However, if you try to add something which is not a vehicle, 
//the garage should return the message “Only vehicles are allowed in here!”. 
//Also, if the garage is at capacity, it should say “Sorry, we’re full.”


class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) { 
        if (vehicle instanceof Vehicle) {
            if (this.vehicles.length !== this.capacity) {
                this.vehicles.unshift(vehicle);
            }
            else {
                return "Sorry, we're full!"
            }
        }
        else {
            return ("Only vehicles are allowed here!")
        }
    }
}

const garage = new Garage(2);


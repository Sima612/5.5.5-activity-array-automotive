class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark() 
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

class Car extends Vehicle {
    constructor(maximimPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maximimPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
        this.started = false;
    }

    loadPassenger(num) {
        if((num + this.passenger) <= this.maximimPassengers) {
                this.passenger = num
                consolole.log("There is only " + this.passenger + " person/people" + ", we have space!")
            } else {
                console.log("Not enough space!...")
            }
    }

    start() {
        if(this.fuel > 0) {
            this.started = true;
            console.log("Engine started...")
        } else {
            console.log("Engine cannot start...")
        }
    }

    scheduleService(mileage) {
        if(this.mileage >= 30000) {
            this.scheduleService == true
            console.log("Time for maintenance!!")
        } else {
            console.log("Not due for maintenance...")
            return this.scheduleService
        }
    }
}
//This exports things you want to use from this "module", more info in readme
module.exports = {Vehicle}
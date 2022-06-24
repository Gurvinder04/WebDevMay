
class Vehicle{
    constructor(type='vehicle',model,year){
        this.type=type;
        this.model=model;
        this.year=year;
    }
}

class Car{
    constructor(type='car',system){
        super(type,model,year);
        this.system=system;
    }

    setVehicleProperties(){
        type,
        model,
        year,
        system
    }

    getVehicleProperties(){
        console.log(type,model,year,system);
    }
}

class Bike{
    constructor(type='Bike',system){
        super(type,model,year);
        this.system=system;
    }
}

let vehicle1 = new Car('Automatic','X500','2022');
vehicle1.getVehicleProperties;
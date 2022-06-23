//parent class drone

class Drone{
    constructor(type='drone',speed=0,battery=100){
        this.type =type;
        this.speed=speed;
        this.battery =battery;
    }
}

class CivilDrone extends Drone{
    constructor(type='civl drone', speed=50, battery=100){  //default value if user doesnt enter anything
        super(type,speed,battery);
        this.owners=[];
    }

    registerDroneOwner(deviceId,fullname,address){
        this.owners.push({
            type:this.type,
            speed:this.speed,
            battery:this.battery,
            deviceId,
            fullname,
            address
        })
    }

    getDroneOwners(){
        return this.owners;
    }
}


class MilitaryDrone extends Drone{
    constructor(type='military drone', speed=0, battery=100){
        super(type,speed,battery);
        this.owners=[];
    }

    registerDroneOwner(deviceId,fullname,address){
        this.owners.push({
            type:this.type,
            speed:this.speed,
            battery:this.battery,
            deviceId,
            fullname,
            address
        })
    }

    getDroneOwners(){
        return this.owners;
    }
}


let civil = new CivilDrone();  //empty coz we have set the default value but u can also enter the value
civil.registerDroneOwner('drone001','william','brussels');
civil.registerDroneOwner('drone002','shakespare','brussels');
civil.registerDroneOwner('drone003','anthony','luxembourg');
console.log(civil.getDroneOwners());

let military = new MilitaryDrone('simple drone',300,20);
military.registerDroneOwner('drone001','Rahul','Mumbai');
military.registerDroneOwner('drone002','Simran','Delhi');
military.registerDroneOwner('drone003','Rahul','Goa');
//console.log(military.getDroneOwners());
              //OR
military.getDroneOwners().forEach(owners=>{
    console.log(owners);
})
export class Booth {
    carFee = 100;
    minibusFee = 200;
    busFee = 300;

    report = []

    pass(vehicle) {
        const type = vehicle.constructor.name
        const date = new Date()
        
        let fee = 0

        if(type === "Car"){
            fee = this.carFee
        }else if(type === "Minibus"){
            fee = this.minibusFee;
        }
        else if(type === "Bus"){
            fee = this.busFee;
        }

        if(vehicle.balance >= fee){
            vehicle.balance -= fee
            this.report.push({"hgsNumber":vehicle.hgsNumber,"type":type,"date":date,"fee":fee,"didPass":true})
        } 
        else{
            this.report.push({"hgsNumber":vehicle.hgsNumber,"type":type,"date":date,"fee":0,"didPass":false})
        }

    }
}

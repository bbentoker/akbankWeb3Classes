export class Administration{
    constructor(){
        this.booths = [];
        this.dailyEarnings = 0;
    }
    addBooth(booth){
        this.booths.push(booth);
    }
    report(){
        return this.booths.map(booth => booth.report);
    }
    getDailyEarnings(){
        for(let booth of this.booths){
            for (let report of booth.report){
                if(report.didPass){
                    this.dailyEarnings += report.fee;
                }
            }
        }
        return this.dailyEarnings;
    }
}
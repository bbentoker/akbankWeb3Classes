import {Car} from "./Car.js";
import {Bus} from "./Bus.js";
import {Minibus} from "./Minibus.js";
import { Booth } from "./Booth.js";
import { Administration } from "./Administration.js";

const car = new Car(1,"Emir","Toker",100);
const bus = new Bus(2,"Emir","Toker",400);

const booth = new Booth();


booth.gate(car);
booth.gate(bus);

const administration = new Administration();

administration.addBooth(booth);

console.log(administration.getDailyEarnings());
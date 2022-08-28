import {Car} from "./Car.js";
import {Bus} from "./Bus.js";
import {Minibus} from "./Minibus.js";
import { Booth } from "./Booth.js";
import { Administration } from "./Administration.js";

const car = new Car(1,"Emir","Toker",100);
const bus = new Bus(2,"Hakan","Akkaş",400);

const booth = new Booth();


booth.pass(car);

booth.pass(bus);

const administration = new Administration();

administration.addBooth(booth);

let report = administration.report();
let earnings = administration.getDailyEarnings();
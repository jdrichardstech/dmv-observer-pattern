const DMV = require('./dmvPrototypes');
const Person = require('./person');
const alhambraDmv = new DMV();

const michael = new Person('michael');
const ellis = new Person('ellis');
const joe = new Person('joe');
const jenny = new Person('jenny');
const clarissa = new Person('clarissa');
const bob = new Person('bob');
const lisa = new Person('lisa');
const crystal = new Person('crystal');

alhambraDmv.add(michael);
alhambraDmv.add(ellis);
alhambraDmv.add(joe);
alhambraDmv.add(jenny);
alhambraDmv.add(clarissa);
alhambraDmv.add(bob);
alhambraDmv.add(lisa);
alhambraDmv.add(crystal);

const ticketsFree = alhambraDmv.ticketsFree;
const ticketsProcessing = alhambraDmv.ticketsProcessing;

console.log(`waitingNum: ${alhambraDmv.waitingList.count()}`);
console.log(`ticketsFree: ${ticketsFree.length ? ticketsFree.map(s => s) : 0}`);
console.log(`ticketsProcessing: ${ticketsProcessing.map(s => s)}`);
console.log(michael);
console.log(ellis);
console.log(joe);
console.log(jenny);
console.log(clarissa);
console.log(bob);
console.log(lisa);
console.log(crystal);

alhambraDmv.complete(joe);

console.log(`waitingNum: ${alhambraDmv.waitingList.count()}`);
console.log(`ticketsFree: ${ticketsFree.length ? ticketsFree.map(s => s) : 0}`);
console.log(`ticketsProcessing: ${ticketsProcessing.map(s => s)}`);

alhambraDmv.complete(clarissa);

console.log(michael);
console.log(ellis);
console.log(joe);
console.log(jenny);
console.log(clarissa);
console.log(bob);
console.log(lisa);
console.log(crystal);

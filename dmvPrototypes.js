const WaitingListPerson = require('./waitingListPerson');
const WaitingList = require('./waitingList');
const extend = require('./extendUtility');

function DMV(maxTicketsToProcess = 5) {
  this.ticketsFree = new Array(40).fill(null).map((_, index) => index + 1);
  this.ticketsProcessing = [];
  this.maxTicketsToProcess = maxTicketsToProcess;
  this.waitingList = new WaitingList();
}

// Extracts ticket # from this.ticketsFree
// Adds extracted ticket # to this.ticketsProcessing
// Or add to this.waitingList
DMV.prototype.add = function(person) {
  if (this.ticketsProcessing.length < this.maxTicketsToProcess) {
    const ticketNum = this.ticketsFree.shift();
    console.log(`Taking next ticket #${ticketNum}`);
    this.processNext(person, ticketNum);
  } else {
    this.addToWaitingList(person);
  }
};

// Appends "processing" and "ticketNum" to person
// Inserts ticket # to this.ticketsProcessing if holding ticketNum
DMV.prototype.processNext = function(person, ticketNum) {
  person.processing = true;
  if (ticketNum !== undefined) {
    person.ticketNum = ticketNum;
    this.ticketsProcessing.push(ticketNum);
  }
};

// Extracts ticket # from this.ticketsFree
// Adds extracted ticket # to this.waitingList
DMV.prototype.addToWaitingList = function(person) {
  const ticketNum = this.ticketsFree.splice(0, 1)[0];
  extend(person, new WaitingListPerson(ticketNum));
  this.waitingList.add(person);
};

// Extracts ticket # from this.ticketsProcessing
// Adds extracted ticket to this.ticketsFree
DMV.prototype.complete = function(person) {
  const index = this.ticketsProcessing.indexOf(person.ticketNum);
  this.ticketsProcessing.splice(index, 1)[0];
  this.ticketsFree.push(person.ticketNum);
  delete person.ticketNum;
  delete person.processing;
  if (this.waitingList.count() > 0) {
    this.waitingList.broadcastNext(this.ticketsFree.shift());
  }
};

module.exports = DMV;

function WaitingList() {
  this.waitingList = [];
}

WaitingList.prototype.add = function(person) {
  this.waitingList.push(person);
};

WaitingList.prototype.removeAt = function(index) {
  this.waitingList.splice(index, 1);
};

WaitingList.prototype.get = function(index) {
  return this.waitingList[index];
};

WaitingList.prototype.count = function() {
  return this.waitingList.length;
};

WaitingList.prototype.indexOf = function(ticketNum, startIndex) {
  let currentIndex = startIndex;
  while (currentIndex < this.waitingList.length) {
    const person = this.waitingList[currentIndex];
    if (person.ticketNum === ticketNum) {
      return currentIndex;
    }
    currentIndex++;
  }
  return -1;
};

WaitingList.prototype.broadcastNext = function(ticketNum) {
  const self = this;
  this.waitingList.forEach(function(person) {
    person.notifyTicket(ticketNum, function accept() {
      const index = self.waitingList.indexOf(person);
      self.waitingList.removeAt(index);
      delete person.processing;
      delete person.ticketNum;
      self.ticketsProcessing.push(ticketNum);
    });
  });
};
module.exports = WaitingList;

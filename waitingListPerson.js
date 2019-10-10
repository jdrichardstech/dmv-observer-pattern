function WaitingListPerson(ticketNum) {
  this.ticketNum = ticketNum;
  this.notifyTicket = function(num, accept) {
    if (this.ticketNum === num) {
      accept();
    }
  };
}

module.exports = WaitingListPerson;

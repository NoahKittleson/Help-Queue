import Ember from 'ember';

export default Ember.Component.extend({
  question1: true,
  question2: false,
  question3: false,
  addNewTicket: false,

  actions: {
    showQuestion2() {
      this.set('question1', false);
      this.set('question2', true);
    },
    showQuestion3() {
      this.set('question2', false);
      this.set('question3', true);
    },
    showAddTicketForm() {
      this.set('question3', false);
      this.set('addNewTicket', true);
    },
    save1() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        info: this.get('info')
        time: this.get('time')
      };
      console.log(moment().format('LT'));
      this.set('addNewTicket', false);
      this.sendAction('save2', params);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  timeDifference: Ember.computed('ticket.startTime', function() {
    return "test";
    return moment().unix() - this.get('ticket.startTime');
    console.log(moment().unix());
    console.log(this.get('ticket.startTime'));
  })
});

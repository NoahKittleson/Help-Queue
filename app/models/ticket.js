import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  info: DS.attr(),
  startTime: DS.attr(),
  endTime: DS.attr( { defaultValue: "" }) ,
  open: DS.attr( { defaultValue: true })
});

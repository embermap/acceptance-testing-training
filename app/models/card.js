import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string', { defaultValue: ' ' }),

  user: DS.belongsTo(),
  list: DS.belongsTo()
});

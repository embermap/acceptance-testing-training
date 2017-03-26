import Ember from 'ember';

export default Ember.Component.extend({
  card: null,
  'after-save': function() { },
  cancel: function() { },

  actions: {
    save() {
      let afterSave = this.get('after-save');

      this.get('card').save()
        .then(afterSave);
    }
  }
});

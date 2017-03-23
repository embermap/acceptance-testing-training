import Ember from 'ember';

export default Ember.Component.extend({
  list: null,

  store: Ember.inject.service(),

  isAdding: false,
  newCard: null,

  hideForm() {
    this.set('isAdding', false);
  },

  actions: {
    showForm() {
      let newCard = this.get('store').createRecord('card');
      this.set('newCard', newCard);

      this.toggleProperty('isAdding');
      Ember.run.scheduleOnce('afterRender', () => {
        this.$('.New-card').focus();
      });
    },

    hideForm() {
      this.hideForm();
    },

    save() {
      let card = this.get('newCard');
      let list = this.get('list');

      card.set('list', list);
      card.save();

      this.hideForm();
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  list: null,

  classNames: ['Add-card'],

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
      let order = Math.max( ...list.get('cards').mapBy('order').concat(0) );

      card.setProperties({ list, order });

      card.save();

      this.hideForm();
    }
  }
});

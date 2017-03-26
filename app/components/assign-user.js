import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
  card: null,

  store: Ember.inject.service(),

  isShowingSelectUser: false,

  assignableUsers: task(function*() {
    return yield this.get('store').findAll('user');
  }).on('init'),

  actions: {
    toggleSelectUser() {
      this.toggleProperty('isShowingSelectUser');
    },

    assignUser(user) {
      let card = this.get('card');
      card.set('user', user);
      card.save();
      this.set('isShowingSelectUser', false);
    }
  }
});

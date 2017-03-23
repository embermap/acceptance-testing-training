import Ember from 'ember';

export default Ember.Component.extend({
  card: null,

  isEditing: false,

  router: Ember.inject.service('-routing'),

  actions: {
    toggleEdit() {
      this.toggleProperty('isEditing');
    },

    destroy() {
      let confirm = window.confirm('Are you sure you want to delete this card?');

      if (confirm) {
        let router = this.get('router');

        this.get('card').destroyRecord()
          .then(() => {
            router.transitionTo('index');
          });
      }
    }
  }

});

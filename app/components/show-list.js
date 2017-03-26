import Ember from 'ember';

export default Ember.Component.extend({
  draggable: null,

  didInsertElement() {
    let draggable = this.get('draggable');
    draggable.registerAsGroup(this, '.Show-list__cards');
  }

});

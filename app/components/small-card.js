import Ember from 'ember';

export default Ember.Component.extend({
  card: null,
  draggable: null,

  onMove(before, newGroup) {
    let card = this.get('card');
    let list = newGroup.get('list');
    let order;

    if (before && !before.get('isDestroyed')) {
      order = before.get('card.order') - 1;
    } else {
      let max = Math.max( ...list.get('cards').mapBy('order').concat(0) );
      order = max + 1;
    }

    card.setProperties({ list, order });
    card.save();
  },

  didInsertElement() {
    this.get('draggable').registerAsItem(this);
  }
});

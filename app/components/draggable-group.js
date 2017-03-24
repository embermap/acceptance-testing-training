import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  drake: null,
  groups: null,
  items: null,

  init() {
    this._super(...arguments);

    this.setProperties({
      groups: [],
      items: []
    });

    let drake = window.dragula();

    this.set('drake', drake);

    drake.on('drop', (el, target, source, sibling) => {
      let item = this.findItem(el);
      let newGroup = this.findGroup(target);
      let oldGroup = this.findGroup(source);
      let before = this.findItem(sibling);

      let f = item.get('onMove');

      if (f) {
        f.apply(item, [before, newGroup, oldGroup]);
      }

      if (target !== source) {
        drake.remove();
        //Ember.$(el).remove();
      }
    })
  },

  registerAsGroup(component, container) {
    let element = component.$(container)[0];
    this.get('groups').addObject({ component, element });
    this.get('drake').containers.push(element);
    this.findGroup(element);
  },

  registerAsItem(component) {
    this.get('items').addObject(component);
  },

  findGroup(element) {
    return this.get('groups')
      .find((group) => group.element === element)
      .component;
  },

  findItem(element) {
    return this.get('items')
      .find((component) => component.element === element);
  }

});

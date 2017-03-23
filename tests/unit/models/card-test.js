import { moduleForModel, test } from 'ember-qunit';

moduleForModel('card', 'Unit | Model | card', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:list']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

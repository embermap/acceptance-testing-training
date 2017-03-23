import { test } from 'qunit';
import moduleForAcceptance from 'acceptance-testing-training/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | editing a card');

test('Visiting a card', function(assert) {
  visit('/');

  click(".Small-card:contains('My first card')");

  andThen(function() {
    assert.equal(currentURL(), '/cards/1');
    assert.equal(find('h1').text().trim(), 'My first card');
  });
});

test('Editing a card', function(assert) {
  visit('/cards/1');

  click(".Big-card__edit-link");
  fillIn(".Edit-card__title", "My new title");
  click(".Edit-card__save-button");

  andThen(function() {
    assert.equal( find(".Big-card__title").text().trim(), "My new title" );
  });

});

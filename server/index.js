/* eslint-env node */

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(/* app */) {
  var jsonApi = require("jsonapi-server");

  jsonApi.setConfig({
    port: 16006,
    base: 'api'
  });

  jsonApi.define({
    resource: "lists",
    handlers: new jsonApi.MemoryHandler(),
    attributes: {
      name: jsonApi.Joi.string(),
      cards: jsonApi.Joi.belongsToMany({ resource: 'cards', as: 'list' })
    },
    examples: [
      {
        id: '1',
        type: 'lists',
        name: 'Upcoming',
        cards: [
          { type: 'cards', id: '1' },
          { type: 'cards', id: '2' },
          { type: 'cards', id: '3' }
        ]
      },
      {
        id: '2',
        type: 'lists',
        name: 'Done',
        cards: [
          { type: 'cards', id: '4' }
        ]
      }
    ]
  });

  jsonApi.define({
    resource: "cards",
    handlers: new jsonApi.MemoryHandler(),
    attributes: {
      title: jsonApi.Joi.string()
              .default('')
              .example("The title"),
      description: jsonApi.Joi.string()
                    .min(0)
                    .optional()
                    .default('')
                    .example("About the card"),
      list: jsonApi.Joi.one('lists'),
      user: jsonApi.Joi.one('users'),
    },
    examples: [
      {
        id: '1',
        type: 'cards',
        title: 'My first card',
        description: 'The first card',
        list: { type: 'lists', id: '1' }
      },
      {
        id: '2',
        type: 'cards',
        title: 'Attend EmberConf!',
        list: { type: 'lists', id: '1' }
      },
      {
        id: '3',
        type: 'cards',
        title: 'Write some tests',
        list: { type: 'lists', id: '1' }
      },
      {
        id: '4',
        type: 'cards',
        title: 'Buy EmberConf flight',
        list: { type: 'lists', id: '2' }
      }
    ]
  });

  jsonApi.define({
    resource: "users",
    handlers: new jsonApi.MemoryHandler(),
    attributes: {
      name: jsonApi.Joi.string(),
      email: jsonApi.Joi.string(),
      cards: jsonApi.Joi.belongsToMany({ resource: 'cards', as: 'user' })
    },
    examples: [
      {
        id: '1',
        name: 'Ryan',
        email: 'ryanto@gmail.com',
        cards: [

        ]
      },
      {
        id: '2',
        name: 'Sam',
        email: 'sam.selikoff@gmail.com',
        cards: [

        ]
      }
    ]
  });

  jsonApi.create

  jsonApi.start();


};

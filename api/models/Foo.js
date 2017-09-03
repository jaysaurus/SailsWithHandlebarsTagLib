/**
 * Foo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    bars: {
      collection: 'Bar',
      via: 'foo'
    }

  },

  createAsync: function(params) {
      return new Promise((resolve, reject) => {
          try {
              Foo.create(params)
                 .exec((err, record) => {
                     Foo.findOne(params) // resolves issue retrieving "record" parameter
                        .then(function(foo) {
                            if (!err) resolve(foo);
                            else throw new Error('Failed to exec request');
                        }).catch(function(err) {
                            throw new Error('item was not created');
                        });
              })
          } catch(e) {
              reject(e && e.message ? e.message : 'Something unandled went wrong when performing createAsync');
          }
      });
  }
};

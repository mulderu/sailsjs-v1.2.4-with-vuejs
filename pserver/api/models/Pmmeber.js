/**
 * Pmmeber.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    position: {
      type: 'string',
      required: true,
      maxLength: 20,
    },

    user_id: {
      model: 'user',
    },

    project_id: {
      model: 'project',
    },

  },

};


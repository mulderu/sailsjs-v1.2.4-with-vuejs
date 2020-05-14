/**
 * Annotation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: {
      type: 'string',
      required: true,
      maxLength: 4,
    },

    location: {
      type: 'string',
      required: true,
      maxLength: 100,
    },

    content: {
      type: 'string',
      required: true,
      maxLength: 400,
    },

    details: {
      type: 'string',
      required: true,
      maxLength: 2000,
    },


  },

};


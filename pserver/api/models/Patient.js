/**
 * Patient.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      maxLength: 200,
    },

    sex: {
      type: 'string',
      required: true,
      maxLength: 20,
    },

    birthday: {
      type: 'string',
      required: true,
      maxLength: 40,
    },



  },

};


/**
 * Tag.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    xtype: {
      type: 'string',
      required: true,
      maxLength: 200,
    },

    name: {
      type: 'string',
      maxLength: 100,
    },

    value: {
      type: 'string',
      maxLength: 200,
    },

    ref_id: {
      type: 'number',
      required: true,
    }

  },

};


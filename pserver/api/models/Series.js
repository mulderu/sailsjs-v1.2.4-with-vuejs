/**
 * Series.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    workdate: {
      type: 'string',
      required: true,
      maxLength: 4,
    },

    modality: {
      type: 'string',
      required: true,
      maxLength: 100,
    },

    desc: {
      type: 'string',
      maxLength: 400,
    },

    study_id: {
      model: 'study',
    },


  },

};


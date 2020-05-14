/**
 * Test.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    content_type: {
      type: 'string',
      maxLength: 60,
    },

    fpath: {
      type: 'string',
      maxLength: 400,
    },

    fsize: {
      type: 'number',
    },

    dicom_id: {
      model: 'dicom',
    }

  },

};


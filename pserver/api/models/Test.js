/**
 * Test.js
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

    fpath: {
      type: 'string',
      maxLength: 400,
    },

    details: {
      type: 'string',
      maxLength: 2000,
    },

    dicom_id: {
      model: 'dicom',
    }

  },

};


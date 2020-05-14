/**
 * Pdicom.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    dicom_id: {
      model: 'dicom',
    },

    project_id: {
      model: 'project',
    },

  },

};

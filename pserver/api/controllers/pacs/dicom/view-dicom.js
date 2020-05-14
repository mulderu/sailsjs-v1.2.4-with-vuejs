module.exports = {


  friendlyName: 'View dicom',


  description: 'Display "Dicom" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/dicom/dicom'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

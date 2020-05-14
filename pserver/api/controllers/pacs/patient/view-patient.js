module.exports = {


  friendlyName: 'View patient',


  description: 'Display "Patient" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/patient/patient',
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

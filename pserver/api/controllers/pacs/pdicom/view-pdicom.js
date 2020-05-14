module.exports = {


  friendlyName: 'View pdicom',


  description: 'Display "Pdicom" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/pdicom/pdicom'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

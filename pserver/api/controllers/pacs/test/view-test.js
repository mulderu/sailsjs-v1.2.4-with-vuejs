module.exports = {


  friendlyName: 'View test',


  description: 'Display "Test" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/test/test'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

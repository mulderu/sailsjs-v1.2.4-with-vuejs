module.exports = {


  friendlyName: 'View tag',


  description: 'Display "Tag" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/tag/tag'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

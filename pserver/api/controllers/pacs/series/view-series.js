module.exports = {


  friendlyName: 'View series',


  description: 'Display "Series" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/series/series'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

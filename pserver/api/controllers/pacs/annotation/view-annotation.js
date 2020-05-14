module.exports = {


  friendlyName: 'View annotation',


  description: 'Display "Annotation" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/annotation/annotation'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

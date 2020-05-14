module.exports = {


  friendlyName: 'View project',


  description: 'Display "Project" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/project/project'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

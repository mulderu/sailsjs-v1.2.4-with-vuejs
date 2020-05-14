module.exports = {


  friendlyName: 'View study',


  description: 'Display "Study" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/study/study'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

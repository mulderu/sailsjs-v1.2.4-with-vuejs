module.exports = {


  friendlyName: 'View report',


  description: 'Display "Report" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/pacs/report/report'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

module.exports = {


  friendlyName: 'Test',


  description: 'Test test.',


  inputs: {
    cmd: {
      type: "string",
      required: true,
    },

    id: {
      type: "number",
      required: false,
    },

    data: {
      type: "ref",
      required: false,
    }


  },


  exits: {

  },


  fn: async function (inputs) {
    sails.log.debug("got Test", inputs);

    const action = await sails.helpers.actionService.with({model: Test, 
      params: inputs, myAction: {}});
    return await action[inputs.cmd]();


  }


};

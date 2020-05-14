module.exports = {


  friendlyName: 'Annotation',


  description: 'Annotation annotation.',


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
    sails.log.debug("got Annotation", inputs);

    const action = await sails.helpers.actionService.with({model: Annotation, 
      params: inputs, myAction: {}});
    return await action[inputs.cmd]();


  }


};

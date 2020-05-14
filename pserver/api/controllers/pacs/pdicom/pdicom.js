module.exports = {


  friendlyName: 'Pdicom',


  description: 'Pdicom pdicom.',


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
    sails.log.debug("got Dicom", inputs);

    const action = await sails.helpers.actionService.with({model: Dicom, 
      params: inputs, myAction: {}});
    return await action[inputs.cmd]();


  }


};

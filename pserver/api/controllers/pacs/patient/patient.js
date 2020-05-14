module.exports = {


  friendlyName: 'Patient',


  description: 'Patient patient.',


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
    sails.log.debug("got patient", inputs);

    const action = await sails.helpers.actionService.with({model: Patient, 
      params: inputs, myAction: {}});
    return await action[inputs.cmd]();

    // if (inputs.cmd === "get") {
    //   if (_.isNumber(inputs.id)) {
    //     return await Patient.findOne({id: inputs.id});
    //   } else {
    //     return await Patient.find();
    //   }
    // }
    // else if (inputs.cmd === "post") {
    //   const patient = await Patient.create({ ...inputs.data }).fetch();
    //   return patient;
    // }
    // else if (inputs.cmd === "put") {
    //   if (!_.isNumber(inputs.id)) {
    //     throw "Error";
    //   }
    //   const patient = await Patient.update({id: inputs.id}, { ...inputs.data }).fetch();
    //   return patient;
    // }
    // else if (inputs.cmd === "delete") {
    //   if (!_.isNumber(inputs.id)) {
    //     throw "Error";
    //   }
    //   const patient = await Patient.destroy({id: inputs.id}).fetch();
    //   return patient;
    // }
    // sails.log.debug("has no command or param error")
    // return {"error": 1, "message": "cmd not found"};

  }


};

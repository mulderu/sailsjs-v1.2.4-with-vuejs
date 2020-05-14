module.exports = {


  friendlyName: 'Action service',


  description: '',


  inputs: {
    model: {
      type: "ref",
      required: true,
    },
    params: {
      type: "ref",
      required: true,
    },
    myAction: {
      type: "ref",
      required: false,
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },

  // default action
  fn: async function (inputs) {
    const { model, params } = inputs;
    return _.extend({
      get: async () => {
        if (_.isNumber(params.id)) {
          return await model.findOne({id: params.id});
        } else {
          return await model.find();
        }
      },
      post: async () => {
        const m = await model.create({ ...params.data }).fetch();
        return m;
      },
      put: async () => {
        if (!_.isNumber(params.id)) { 
          throw "Error";
        }
        const m = await model.update({id: params.id}, { ...params.data }).fetch();
        return m;
      },
      delete: async () => {
        if (!_.isNumber(params.id)) {
          throw "Error";
        }
        const m = await Patient.destroy({id: params.id}).fetch();
        return m;
      },

    }, inputs.myAction);

  }


};



function pageVue() {
  return {
    data: _.extend(_baseData,
      {
        patients: null,
        pageLoadedAt: Date.now(),
        dialog: false,
      }),
    created() { 
      this.$vuetify.theme.dark = true; 
      this.fetchData();
    },
    beforeMount() {
    },
    methods: _.extend(_baseMethods(Cloud.patient), {
      async fetchData() {
        const data = await Cloud.patient.with({cmd:'get', });
        console.log(data)
        this.patients = data;
      },
    })
  };
}

function bootPage(opt) {
  _loadPage(opt, [
    `/js/components/blog-post.js`, 
    `/js/components/js-htime.js`, 
  ]);
}
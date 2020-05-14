# demo user

mulderu@gmail.com / mulder123

# pserver

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Fri May 01 2020 13:36:11 GMT+0900 (GMT+09:00) using Sails v1.2.4.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->


### init-script

```
mulder@~/Project/phenos/playpacs/pserver$ sh a1
 info: Created a new model ("Patient")!

Successfully generated:
 •- api/controllers/pacs/patient/patient.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/patient/patient': { action: 'pacs/patient/patient' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/patient/patient.ejs
 •- api/controllers/pacs/patient/view-patient.js
 •- assets/styles/pages/pacs/patient/patient.less
 •- assets/js/pages/pacs/patient/patient.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/patient/patient': { action: 'pacs/patient/view-patient' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/patient/patient.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Study")!

Successfully generated:
 •- api/controllers/pacs/study/study.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/study/study': { action: 'pacs/study/study' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/study/study.ejs
 •- api/controllers/pacs/study/view-study.js
 •- assets/styles/pages/pacs/study/study.less
 •- assets/js/pages/pacs/study/study.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/study/study': { action: 'pacs/study/view-study' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/study/study.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Series")!

Successfully generated:
 •- api/controllers/pacs/series/series.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/series/series': { action: 'pacs/series/series' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/series/series.ejs
 •- api/controllers/pacs/series/view-series.js
 •- assets/styles/pages/pacs/series/series.less
 •- assets/js/pages/pacs/series/series.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/series/series': { action: 'pacs/series/view-series' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/series/series.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Dicom")!

Successfully generated:
 •- api/controllers/pacs/dicom/dicom.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/dicom/dicom': { action: 'pacs/dicom/dicom' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/dicom/dicom.ejs
 •- api/controllers/pacs/dicom/view-dicom.js
 •- assets/styles/pages/pacs/dicom/dicom.less
 •- assets/js/pages/pacs/dicom/dicom.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/dicom/dicom': { action: 'pacs/dicom/view-dicom' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/dicom/dicom.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Annotation")!

Successfully generated:
 •- api/controllers/pacs/annotation/annotation.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/annotation/annotation': { action: 'pacs/annotation/annotation' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/annotation/annotation.ejs
 •- api/controllers/pacs/annotation/view-annotation.js
 •- assets/styles/pages/pacs/annotation/annotation.less
 •- assets/js/pages/pacs/annotation/annotation.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/annotation/annotation': { action: 'pacs/annotation/view-annotation' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/annotation/annotation.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Test")!

Successfully generated:
 •- api/controllers/pacs/test/test.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/test/test': { action: 'pacs/test/test' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/test/test.ejs
 •- api/controllers/pacs/test/view-test.js
 •- assets/styles/pages/pacs/test/test.less
 •- assets/js/pages/pacs/test/test.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/test/test': { action: 'pacs/test/view-test' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/test/test.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Tag")!

Successfully generated:
 •- api/controllers/pacs/tag/tag.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/tag/tag': { action: 'pacs/tag/tag' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/tag/tag.ejs
 •- api/controllers/pacs/tag/view-tag.js
 •- assets/styles/pages/pacs/tag/tag.less
 •- assets/js/pages/pacs/tag/tag.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/tag/tag': { action: 'pacs/tag/view-tag' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/tag/tag.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Report")!

Successfully generated:
 •- api/controllers/pacs/report/report.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/report/report': { action: 'pacs/report/report' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/report/report.ejs
 •- api/controllers/pacs/report/view-report.js
 •- assets/styles/pages/pacs/report/report.less
 •- assets/js/pages/pacs/report/report.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/report/report': { action: 'pacs/report/view-report' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/report/report.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Project")!

Successfully generated:
 •- api/controllers/pacs/project/project.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/project/project': { action: 'pacs/project/project' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/project/project.ejs
 •- api/controllers/pacs/project/view-project.js
 •- assets/styles/pages/pacs/project/project.less
 •- assets/js/pages/pacs/project/project.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/project/project': { action: 'pacs/project/view-project' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/project/project.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Pmmeber")!

Successfully generated:
 •- api/controllers/pacs/pmmeber/pmmeber.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/pmmeber/pmmeber': { action: 'pacs/pmmeber/pmmeber' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/pmmeber/pmmeber.ejs
 •- api/controllers/pacs/pmmeber/view-pmmeber.js
 •- assets/styles/pages/pacs/pmmeber/pmmeber.less
 •- assets/js/pages/pacs/pmmeber/pmmeber.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/pmmeber/pmmeber': { action: 'pacs/pmmeber/view-pmmeber' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/pmmeber/pmmeber.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

 info: Created a new model ("Pdicom")!

Successfully generated:
 •- api/controllers/pacs/pdicom/pdicom.js

A few reminders:
 (1)  For most projects, you'll need to manually configure an explicit route
      in your `config/routes.js` file; e.g.
          'POST /api/v1/pacs/pdicom/pdicom': { action: 'pacs/pdicom/pdicom' },

 (2)  If you are using the built-in JavaScript SDK ("Cloud") for AJAX requests
      from client-side code, then after configuring a new route, you'll want to
      regenerate the SDK setup file using:
          sails run rebuild-cloud-sdk

 (3)  This new action was generated in the "actions2" format.
        [?] https://sailsjs.com/docs/concepts/actions

 (4)  Last but not least, since adding an action or route is a backend change,
      don't forget to re-lift the server before testing!


Successfully generated:
 •- views/pages/pacs/pdicom/pdicom.ejs
 •- api/controllers/pacs/pdicom/view-pdicom.js
 •- assets/styles/pages/pacs/pdicom/pdicom.less
 •- assets/js/pages/pacs/pdicom/pdicom.page.js

A few reminders:
 (1)  These files were generated assuming your Sails app is using
      Vue.js as its front-end framework.  (If you're unsure,
      head over to https://sailsjs.com/support)

 (2)  You'll need to manually add a route for this new page's
      action in your `config/routes.js` file; e.g.
          'GET /pacs/pdicom/pdicom': { action: 'pacs/pdicom/view-pdicom' },

 (3)  You'll need to manually import the new LESS stylesheet
      from your `assets/styles/importer.less` file; e.g.
          @import 'pages/pacs/pdicom/pdicom.less';

 (4)  Last but not least, since some of the above are backend changes,
      don't forget to re-lift the server before testing!

```

/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"patient":{"verb":"POST","url":"/api/v1/pacs/patient","args":["cmd","id","data"]},"study":{"verb":"POST","url":"/api/v1/pacs/study","args":[]},"series":{"verb":"POST","url":"/api/v1/pacs/series","args":[]},"dicom":{"verb":"POST","url":"/api/v1/pacs/dicom","args":[]},"annotation":{"verb":"POST","url":"/api/v1/pacs/annotation","args":[]},"test":{"verb":"POST","url":"/api/v1/pacs/test","args":[]},"tag":{"verb":"POST","url":"/api/v1/pacs/tag","args":[]},"report":{"verb":"POST","url":"/api/v1/pacs/report","args":[]},"project":{"verb":"POST","url":"/api/v1/pacs/project","args":[]},"pmmeber":{"verb":"POST","url":"/api/v1/pacs/pmmeber","args":[]},"pdicom":{"verb":"POST","url":"/api/v1/pacs/pdicom","args":[]}}
  /* eslint-enable */

});

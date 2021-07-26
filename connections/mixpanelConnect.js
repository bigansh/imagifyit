const Mixpanel = require('mixpanel')

const mixpanelExecute = Mixpanel.init(process.env.MIXPANEL_SECRET)

module.exports = mixpanelExecute

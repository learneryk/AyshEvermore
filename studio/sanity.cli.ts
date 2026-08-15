import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ipnzqgln',
    dataset: 'production'
  },
  studioHost: 'ayshevermore',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'bckb31i9ql2b99biyv0hu5o2',
  },
})

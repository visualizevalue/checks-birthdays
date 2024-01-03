// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Birthday Check',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0'
        },
        { name: 'title', content: 'Birthday Check' },
        { name: 'description', content: 'We celebrate the first year of VV Checks.' },
        { property: 'og:title', content: 'Birthday Check' },
        { property: 'og:description', content: 'We celebrate the first year of VV Checks.' },
        { property: 'og:image', content: 'https://birthday.checks.art/OG.png' },
        { name: 'theme-color', content: '#EFEFEF' },
      ],
      link: [
        {
          href: '/favicon.png',
          rel: 'shortcut icon',
          type: 'image/png',
        }
      ],
    }
  },
  runtimeConfig: {
    public: {
      signatureApi: 'https://api.signature.vv.xyz/v1',
      checksApi: 'https://api.checks.art/v2',
      rpc: 'http://127.0.0.1:8545',
      alchemy: '',
      walletConnectProjectId: '',
      chainName: 'mainnet',
      chainId: '1',
    },
  },
  $development: {
    extends: [
      import.meta.env.NUXT_VVEB3_LINK,
    ],
  },
  $production: {
    extends: [
      'github:visualizevalue-dev/vveb3-layer',
    ],
  },
})

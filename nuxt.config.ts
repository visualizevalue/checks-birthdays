// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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

import { signTypedData, type SignTypedDataArgs } from '@wagmi/core'

export const ACTION = 'sign'
export const OBJECT = 'https://birthday.checks.art'

// FIXME: Extract into a library
export const notabilityCheck712Definition = (subject: string[], action: string, object: string): SignTypedDataArgs => {
  const name = 'Notability Check'
  const domain = {
    name,
    version: '1',
  }

  const types = {
    [name]: [
      { name: 'Subject', type: 'address[]' },
      { name: 'Action', type: 'string' },
      { name: 'Object', type: 'string' },
    ],
  }

  return {
    primaryType: name,
    message: {
      Subject: subject,
      Action: action,
      Object: object,
    },
    domain,
    types,
  }
}

export const signChecksBirthday = async (subject: string) =>
  await signTypedData(notabilityCheck712Definition([subject], ACTION, OBJECT))

export const signaturesLoading = ref(false)
export const signatures = ref([])
export const totalSignaturesCount = ref(0)

export const useSignatures = () => {
  const config = useRuntimeConfig()

  const object = `https://birthday.checks.art`
  const pageSize = 1000
  const query = `filters%5Bobject%5D=${object}&filters%5Bobject%5D=${object}/&filters%5Baction%5D=%26sign&limit=${pageSize}`

  const load = async () => {
    signaturesLoading.value = true
    try {
      const response: any = await $fetch(`${config.public.signatureApi}/signatures?${query}`)
      signatures.value = response.data
      totalSignaturesCount.value = response.meta.total
    } catch (e) {
      //
    }
    signaturesLoading.value = false
  }

  return {
    signatures,
    totalSignaturesCount,
    signaturesLoading,
    load,
  }
}

export const addressToChecksColor = (address) => {
  const hexNumber = BigInt(address)
  const checksEditionColorIndex = hexNumber % 80n

  // @ts-ignore
  return EDITION_COLORS[checksEditionColorIndex]
}

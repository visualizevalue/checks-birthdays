import { signTypedData, type SignTypedDataArgs } from '@wagmi/core'
import { EDITION_COLORS } from './colors'

export const ACTION = 'sign'
export const OBJECT = 'https://birthday.checks.art'
export const QUERY_FILTERS = `filters%5Bobject%5D=${OBJECT}&filters%5Baction%5D=%26sign`

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

export const signaturesLoading = ref(true)
export const signatures = ref([])
export const totalSignaturesCount = ref(0)
export const activeSignature = ref(null)

export const useSignatures = () => {
  const config = useRuntimeConfig()

  const pageSize = 1
  const query = `${QUERY_FILTERS}&limit=${pageSize}`

  const load = async () => {
    signaturesLoading.value = true
    try {
      const response: any = await $fetch(`${config.public.signatureApi}/signatures?${query}`)
      signatures.value = response.data
      totalSignaturesCount.value = response.meta.total

      if (! activeSignature.value) {
        activeSignature.value = signatures.value[0]
      }
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

export const addressToChecksColor = (address: string) => {
  const hexNumber = BigInt(address)
  const checksEditionColorIndex = Number(hexNumber % 80n)

  return EDITION_COLORS[checksEditionColorIndex]
}

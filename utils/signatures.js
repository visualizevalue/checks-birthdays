export const signaturesLoading = ref(false)
export const signatures = ref([])
export const totalSignaturesCount = ref(0)

export const useSignatures = () => {
  const config = useRuntimeConfig()

  const object = `https://birthday.checks.art`
  const pageSize = 1000
  const query = `filters%5Bobject%5D=${object}&limit=${pageSize}`

  const load = async () => {
    signaturesLoading.value = true
    try {
      const response = await $fetch(`${config.public.signatureApi}/signatures?${query}`)
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

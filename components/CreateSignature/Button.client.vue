<template>
  <Button
    @click.stop.prevent="sign"
    :disabled="signing"
  >
    <Icon type="feather" />
    <span v-if="! isConnected">Check In</span>
    <span v-else-if="signing">Signing</span>
    <span v-else>Sign</span>
  </Button>

  <Modal
    :open="open"
    :title="title"
    :click-outside="false"
  >
    <div v-if="requesting" class="centered">
      <Loader />
      <p>Requesting your signature... <br>Check your wallet for a signature request.</p>
    </div>
    <div v-else-if="signing" class="centered">
      <Loader />
      <p>Signing...</p>
    </div>
    <div v-else-if="publishing" class="centered">
      <Loader />
      <p>Publishing your signature...</p>
    </div>
  </Modal>
</template>

<script setup>
import { ACTION, OBJECT } from '~/utils/sign'

const config = useRuntimeConfig()
const emit = defineEmits(['signed'])

const { address, isConnected } = useAccount()

const open = ref(false)
const requesting = ref(false)
const signing = ref(false)
const publishing = ref(false)
const signature = ref(null)
const signed = computed(() => !! signature.value)
const title = computed(() => {
  if (requesting.value) {
    return `Requesting Signature...`
  }

  if (signing.value) {
    return `Signing Statement...`
  }

  if (signed.value) {
    return `Publish Statement?`
  }

  if (publishing.value) {
    return `Publishing Statement`
  }

  return `Signature Check`
})

const sign = async () => {
  if (! isConnected.value) {
    return document.getElementById('main-connect').click()
  }

  try {
    open.value = true
    signing.value = true
    requesting.value = true

    signature.value = await signChecksBirthday(address.value)

    requesting.value = false
    publishing.value = true

    await $fetch(`${config.public.signatureApi}/signatures`, {
      method: 'POST',
      body: JSON.stringify({
        subjects: [address.value],
        action: ACTION,
        object: OBJECT,
        signer: address.value,
        signature: signature.value,
      }),
    })

    emit('signed')
  } catch (e) {
    // ...
    console.error(e)
  }

  open.value = false
  signing.value = false
  requesting.value = false
  publishing.value = false
}
</script>

<style lang="postcss" scoped>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--padding);
  text-align: center;

  .icon {
    width: var(--size-8);
    height: var(--size-8);
  }

  p {
    color: var(--gray-z-7);
  }
}

footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: var(--padding);
  gap: var(--padding);
  border-top: var(--border-dark);
}
</style>

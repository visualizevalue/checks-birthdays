<template>
  <footer v-if="show" @click.stop.prevent="sign" :class="{ connected: isConnected }">
    <Icon type="check" :style="{ color: isConnected && addressToChecksColor(address) }" />

    <div v-if="isConnected">
      <Account :address="address" v-slot:default="{ display }">
        <span>{{ display }}</span>
      </Account>
    </div>

    <div v-else>
      Check In to Sign
    </div>

    <CreateSignatureButton @signed="emit('signed')" />
  </footer>
</template>

<script setup>
import { useAccount } from '@wagmi/vue'
import { useIntervalFn } from '@vueuse/core'
import { isOngoing } from '~/utils/dates'

const show = ref(isOngoing())

useIntervalFn(() => {
  show.value = isOngoing()
}, 1000)

const { address, isConnected } = useAccount()

const emit = defineEmits(['signed'])
</script>

<style lang="postcss" scoped>
footer {
  margin-top: auto;
  border-top: var(--border-dark);
  color: var(--gray-z-4);
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  background: var(--background);
  gap: var(--size-4);
  padding: 0 0 0 var(--padding);

  &.connected {
    color: var(--gray-z-8);
  }

  > .icon:first-child {
    width: var(--size-7);
    height: var(--size-7);
    left: var(--padding);
  }

  :deep(> button) {
    margin-left: auto;
    padding: var(--padding-lg) var(--padding-lg);
  }
}
</style>

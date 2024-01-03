<template>
  <aside @click.stop.prevent="sign" :class="{ connected: isConnected }">
    <Icon type="check" :style="{ color: isConnected && addressToChecksColor(address) }" />

    <div v-if="isConnected">
      <Address :address="address" />
    </div>

    <div v-else>
      Check In to Sign
    </div>

    <CreateSignatureButton @signed="load" />
  </aside>
</template>

<script setup>
const { address, isConnected } = useAccount()
const { load } = useSignatures()

const sign = () => sign
</script>

<style lang="postcss" scoped>
aside {
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

<template>
  <header>
    <Icon type="check" />

    <Connect :wallet-connect-project-id="config.public.walletConnectProjectId" :rpc="config.public.rpc" />
  </header>
</template>

<script setup>
const config = useRuntimeConfig()
</script>

<style lang="postcss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding);

  @media (--md) {
    padding: var(--padding) var(--padding-lg);
  }

  & > .icon {
    width: var(--size-6);
    height: var(--size-6);
  }
}
</style>

<template>
  <header>
    <span>
      <Icon type="check" />
      <h1>One Year of Checks</h1>
    </span>

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

  @media (--lg) {
    position: sticky;
    top: 0;
  }

  > span {
    display: flex;
    align-items: center;
    gap: var(--size-2);

    > .icon {
      width: var(--size-6);
      height: var(--size-6);
    }
  }
}
</style>

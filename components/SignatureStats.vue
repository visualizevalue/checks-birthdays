<template>
  <aside>
    <p>{{ signatureCount }} signatures</p>
    <p><CountDown :until="ORIGINALS_DEPLOYMENT_ANNIVERSARY" class="inline" /> left</p>
  </aside>
</template>

<script setup>
const ORIGINALS_DEPLOYMENT_ANNIVERSARY = 1707771600
const signatureCount = ref(324)
</script>

<style lang="postcss" scoped>

aside {
  border: var(--border-dark);
  background: var(--gray-z-0);

  p {
    padding: calc(var(--padding)/2) var(--padding-lg);

    &:not(:last-child) {
      border-bottom: var(--border-dark);
    }
  }

  @media (--lg) {
    position: fixed;
    left: var(--padding-lg);
    width: calc((100vw - var(--main-content-max-width)) / 2 - var(--padding-lg) * 2);
    box-shadow: var(--shadow);
  }
}

</style>

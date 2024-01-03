<template>
  <ListCard>
    <p>{{ totalSignaturesCount }} signatures</p>
    <p>
      <CountDown :until="ORIGINALS_DEPLOYMENT_ANNIVERSARY" class="inline">
        left
      </CountDown>
    </p>
  </ListCard>
</template>

<script setup>
const ORIGINALS_DEPLOYMENT_ANNIVERSARY = 1707771600
</script>

<style lang="postcss" scoped>
aside {
  @media (--lg) {
    position: fixed;
    left: var(--padding-lg);
    width: calc((100vw - var(--main-content-max-width)) / 2 - var(--padding-lg) * 2);
    box-shadow: var(--shadow);
  }
}

</style>

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
    --side: calc((100vw - var(--main-content-max-width)) / 2 - var(--padding-lg) * 2);

    position: fixed;
    width: var(--side);
    max-width: var(--main-content-max-width);
    right: calc(var(--side) + var(--main-content-max-width) + var(--padding-lg)*3);
    box-shadow: var(--shadow);
  }
}

</style>

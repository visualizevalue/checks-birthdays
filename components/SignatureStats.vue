<template>
  <Transition name="fade" appear>
    <ListCard v-if="! signaturesLoading">
      <p>Signed by {{ totalSignaturesCount }} people</p>
      <p v-if="show">
        <CountDown @complete="show = false" :until="ORIGINALS_DEPLOYMENT_ANNIVERSARY" class="inline">
          left
        </CountDown>
      </p>
    </ListCard>
  </Transition>
</template>

<script setup>
import { ORIGINALS_DEPLOYMENT_ANNIVERSARY, isOngoing } from '~/utils/dates'

const show = ref(isOngoing())
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

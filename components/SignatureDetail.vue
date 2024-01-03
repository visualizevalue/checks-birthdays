<template>
  <ListCard v-if="activeSignature">
    <Icon type="check" />

    <p><Address :address="activeSignature?.signer" /></p>
    <p>{{ mintCount }} mints</p>
    <p>
      {{ migrationCount }} migrations

      <span class="muted">Day {{ firstMigrationDay }}</span>
    </p>
    <p>{{ compositeCount }} composites</p>
  </ListCard>
</template>

<script setup>
import { activeSignature } from '~/utils/signatures'

const mintCount = ref(551)
const migrationCount = ref(404)
const compositeCount = ref(330)
const firstMigrationDay = ref(1)
</script>

<style lang="postcss" scoped>
aside {
  > .icon:first-child {
    position: absolute;
    width: var(--size-6);
    height: var(--size-6);
    top: calc(-1 * var(--size-3));
    right: calc(-1 * var(--size-3));
  }

  @media (--lg) {
    position: fixed;
    right: var(--padding-lg);
    width: calc((100vw - var(--main-content-max-width)) / 2 - var(--padding-lg) * 2);
    box-shadow: var(--shadow);
  }
}
</style>

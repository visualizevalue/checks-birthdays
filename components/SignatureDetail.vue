<template>
  <ListCard v-if="activeSignature">
    <Icon type="check" :style="{ color: addressToChecksColor(activeSignature.signer) }" />

    <p><Address :address="activeSignature?.signer" /></p>
    <p>{{ mintCount }} mints</p>
    <p>
      {{ migrationCount }} migrations

      <span v-if="migrationCount" class="muted">Day {{ firstMigrationDay }}</span>
    </p>
    <p>{{ compositeCount }} composites</p>
  </ListCard>
</template>

<script setup>
import { activeSignature } from '~/utils/signatures'

const config = useRuntimeConfig()
const accountStats = ref(null)

watch(() => activeSignature.value?.signer, async () => {
  accountStats.value = null

  try {
    accountStats.value = await $fetch(
      `${config.public.checksApi}/accounts/${activeSignature.value.signer.toLowerCase()}/stats`
    )
  } catch (e) {
    //
  }
})

const mintCount = computed(() => accountStats.value?.numberOfMints || 0)
const migrationCount = computed(() => accountStats.value?.numberOfMigrations || 0)
const compositeCount = computed(() => accountStats.value?.numberOfComposites || 0)
const firstMigrationDay = computed(() => accountStats.value?.firstMigrationDay || false)
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

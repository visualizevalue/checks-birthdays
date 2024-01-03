<template>
  <div :style="`color: ${checksEditionColor}`">
    <Icon type="check" />
  </div>
</template>

<script setup>
const { signature } = defineProps({
  signature: Object,
})

const hexNumber = computed(() => BigInt(signature.signer))
const checksEditionColorIndex = computed(() => hexNumber.value % 80n)
const checksEditionColor = computed(() => EDITION_COLORS[checksEditionColorIndex.value])
</script>

<style lang="postcss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  container-type: inline-size;

  .icon {
    width: 100cqw;
    height: 100cqw;
  }
}
</style>

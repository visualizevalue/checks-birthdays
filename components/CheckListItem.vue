<template>
  <div :style="`color: ${checksEditionColor}`">
    <Icon type="check" />
  </div>
</template>

<script setup>
const { signature } = defineProps({
  signature: Object,
})

const checksEditionColor = computed(() => addressToChecksColor(signature.signer))
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

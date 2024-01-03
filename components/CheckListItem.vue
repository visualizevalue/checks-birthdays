<template>
  <div :class="{ active   }" :style="`color: ${checksEditionColor}`">
    <Icon type="check" />
  </div>
</template>

<script setup>
const { signature } = defineProps({
  signature: Object,
  active: Boolean,
})

const checksEditionColor = computed(() => addressToChecksColor(signature.signer))
</script>

<style lang="postcss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  container-type: inline-size;
  cursor: pointer;

  &.active {
    border: 2px solid red;
  }

  .icon {
    width: 100cqw;
    height: 100cqw;
  }
}
</style>

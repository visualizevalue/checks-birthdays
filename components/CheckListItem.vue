<template>
  <div :class="{ active }" :style="`color: ${checksEditionColor}`">
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
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all var(--speed);

  &.active {
    box-shadow: var(--shadow);
    border: var(--border-dark);
    transform: scale(1.618) rotate(360deg);
  }

  .icon {
    width: 100cqw;
    height: 100cqw;
  }
}
</style>

<template>
  <div class="checks-stream">
    <CheckListItem
      v-for="signature in signatures"
      :key="signature.cid"
      :signature="signature"
      :active="activeSignature?.cid === signature.cid"
      @click="() => activate(signature)"
    />
  </div>
</template>

<script setup>
import { activeSignature } from '~/utils/signatures'

const activate = (signature) => {
  activeSignature.value = signature
}
</script>

<style lang="postcss" scoped>
.checks-stream {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: var(--padding);
  padding: calc(var(--padding-lg) - var(--size-1)) calc(var(--padding-lg) - var(--size-1)) var(--padding);
}
</style>

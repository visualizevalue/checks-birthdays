<template>
  <div class="checks-stream">
    <CheckListItem
      v-for="(signature, index) in signatures"
      :key="index"
      :signature="signature"
    />
  </div>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
.checks-stream {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: var(--padding);
  padding: 0 calc(var(--padding-lg) - var(--size-1)) var(--padding);
}
</style>





























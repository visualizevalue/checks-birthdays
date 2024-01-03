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
const signatures = [
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
  { address: '0x5efdB6D8c798c2c2Bea5b1961982a5944F92a5C1' },
  { address: '0xe11Da9560b51f8918295edC5ab9c0a90E9ADa20B' },
  { address: '0xD1295FcBAf56BF1a6DFF3e1DF7e437f987f6feCa' },
]
</script>

<style lang="postcss" scoped>
.checks-stream {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: var(--padding);
  padding: 0 calc(var(--padding-lg) - var(--size-1)) var(--padding);
}
</style>





























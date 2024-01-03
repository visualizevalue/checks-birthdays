<template>
  <ClientOnly>
    <PaginatedContent :url="url" :query="query" :refresh-key="refreshKey" class="checks-stream">
      <template v-slot="{ items }">
        <TransitionGroup name="fade">
          <CheckListItem
            v-for="signature in items"
            :key="signature.cid"
            :signature="signature"
            :active="activeSignature?.cid === signature.cid"
            @click="() => activate(signature)"
          />
        </TransitionGroup>
      </template>
      <template #loading>
        <Loading />
      </template>
    </PaginatedContent>
  </ClientOnly>
</template>

<script setup>
import { activeSignature, QUERY_FILTERS } from '~/utils/signatures'

defineProps({
  refreshKey: Number,
})
const config = useRuntimeConfig()
const url = `${config.public.signatureApi}/signatures`
const query = `${QUERY_FILTERS}&limit=80`

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

  :deep(.loading) {
    grid-column: 1 / -1;
  }
}
</style>

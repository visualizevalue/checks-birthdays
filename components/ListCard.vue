<template>
  <aside>
    <slot />
  </aside>
</template>

<style lang="postcss" scoped>
aside {
  border: var(--border-dark);
  background: var(--gray-z-0);
  position: relative;

  :deep(> p) {
    display: flex;
    justify-content: space-between;
    padding: calc(var(--padding)/2) var(--padding-lg);

    &:not(:last-child) {
      border-bottom: var(--border-dark);
    }
  }
}
</style>

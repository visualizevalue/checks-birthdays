<template>
  <header>
    <Icon type="check" />

    <Connect />
  </header>
</template>

<style lang="postcss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding);

  @media (--md) {
    padding: var(--padding) var(--padding-lg);
  }

  & > .icon {
    width: var(--size-6);
    height: var(--size-6);
  }
}
</style>

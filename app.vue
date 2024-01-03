<template>
  <main class="lightmode">
    <AppHeader />

    <section>
      <h1>One Year of Checks</h1>

      <SignatureStats />
      <SignatureDetail />

      <ChecksStream />

      <CreateSignature />
    </section>
  </main>
</template>

<script setup>
import '~/styles/index.css'
const { load } = useSignatures()

onMounted(() => load())
</script>


<style lang="postcss" scoped>
main {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

main > section {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  width: var(--main-content-width);
  max-width: var(--main-content-max-width);
  flex-grow: 1;
  background: var(--gray-z-0);
  box-shadow: var(--shadow);
  margin: 0 auto;

  > h1 {
    padding: var(--padding-lg) var(--padding-lg) var(--padding);
    font-size: var(--font-lg);
  }

  :deep(> aside) {
    &:first-of-type {
      margin-top: var(--padding);

      @media (--lg) {
        margin-top: 0;
      }
    }

    &:last-of-type {
      margin-bottom: var(--padding-lg);
    }
  }
}
</style>

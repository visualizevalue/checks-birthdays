<template>
  <main class="lightmode">
    <AppHeader />

    <section>
      <h1>One Year of Checks</h1>

      <ChecksStream />

      <CreateSignature />
    </section>
  </main>
</template>

<script setup>
import '~/styles/index.css'


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
  width: calc(100vw - var(--padding)*2);
  max-width: 25rem;
  flex-grow: 1;
  background: var(--gray-z-0);
  box-shadow: var(--shadow);
  margin: 0 auto;

  > h1 {
    padding: var(--padding-lg);
    font-size: var(--font-lg);
  }
}
</style>

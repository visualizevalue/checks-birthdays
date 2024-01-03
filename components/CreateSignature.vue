<template>
  <form @click.stop.prevent="sign">

    <Input v-model="comment" placeholder="Check In to sign">
      <template #before>
        <Icon type="check" />
      </template>
    </Input>

    <Button type="submit">Sign</Button>
  </form>
</template>

<script setup>
const comment = ref('')

const sign = async () => {
  console.log('request signature')
}
</script>

<style lang="postcss" scoped>
form {
  margin-top: auto;
  border-top: var(--border-dark);
  color: var(--gray-z-4);
  display: flex;
  justify-content: space-between;
  position: relative;

  .input {
    display: flex;
    align-items: center;
    background: var(--gray-z-1);
    flex-grow: 1;
    transition: all var(--speed);

    &:has(textarea:focus),
    &:has(textarea:active) {
      background: var(--gray-z-2);
    }

    > .icon:first-child {
      width: var(--size-7);
      height: var(--size-7);
      position: absolute;
      left: var(--padding);
    }

    :deep(> textarea) {
      padding: var(--padding) var(--padding) var(--padding) calc(var(--padding) + var(--size-8));
      width: 100%;
      height: 100%;
    }
  }
}
</style>

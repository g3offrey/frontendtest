<template>
  <button class="button" type="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  background-color: var(--lighten);
  box-shadow: 0 0.2rem var(--darken);
  color: var(--light);
  border-radius: 0.3rem;
  cursor: pointer;
}

.button:hover {
  background-color: var(--lightenx2);
}
</style>

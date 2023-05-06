<script setup lang="ts"></script>

<template>
  <button class="rules-button">rules</button>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as var;

.rules-button {
  display: block;
  padding: 8px 32px;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 8px;
  border: 1px solid var.$c-text-light;
  text-transform: uppercase;
  margin-left: auto;
  margin-top: 30px;

  &:hover {
    opacity: 0.9;
  }
}
</style>

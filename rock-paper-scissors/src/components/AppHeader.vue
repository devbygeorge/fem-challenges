<script lang="ts">
export default {
  props: {
    score: Number
  }
}
</script>

<template>
  <header class="header">
    <h1 class="logo"><img src="../assets/images/logo.svg" alt="Rock Paper Scissors" /></h1>
    <div class="score-container">
      <span class="score-label">score</span>
      <span class="score-value">{{ score }}</span>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as var;
@use '../assets/styles/mixins.scss' as mix;

.header {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 32px;
  border-radius: 16px;
  border: 2px solid var.$c-header-outline;

  @include mix.mobile {
    padding: 20px;
  }
}
.logo {
  display: inline-flex;

  @include mix.mobile {
    width: 100px;
  }
}
.score-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 32px;
  background: var.$c-text-light;
  border-radius: 8px;

  @include mix.mobile {
    padding-inline: 18px;
  }
}
.score-label {
  font-size: 16px;
  letter-spacing: 2px;
  color: var.$c-text-score;
  text-transform: uppercase;
}
.score-value {
  font-family: var.$ff-barlow-700;
  font-size: 48px;
  color: var.$c-text-dark;
}
</style>

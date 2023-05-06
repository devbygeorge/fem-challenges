<script lang="ts">
import MoveButton from './MoveButton.vue'
export default {
  components: {
    MoveButton
  },
  props: {
    picked: String,
    aiPicked: String,
    gameResult: String,
    enablePickMode: Function
  }
}
</script>

<template>
  <div class="game-area">
    <div class="move-button-area">
      <span class="move-button-label">you picked</span>
      <MoveButton :type="picked" size="large" />
    </div>
    <div v-if="gameResult" class="middle-column">
      <span class="result-text">{{ gameResult }}</span>
      <button @click="enablePickMode && enablePickMode()" class="play-again-button">
        play again
      </button>
    </div>
    <div class="move-button-area">
      <span class="move-button-label">the house picked</span>
      <div v-if="!aiPicked" class="move-button-shadow"></div>
      <MoveButton v-if="aiPicked" :type="aiPicked" size="large" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as var;
@use '../assets/styles/mixins.scss' as mix;

.game-area {
  display: flex;
  justify-content: space-evenly;
  margin-top: 48px;
}
.move-button-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.move-button-label {
  font-family: var.$ff-barlow-700;
  font-size: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;

  @include mix.mobile {
    font-size: 14px;
    text-align: center;
  }
}
.move-button-shadow {
  width: 230px;
  height: 230px;
  background: black;
  border-radius: 50%;
  opacity: 0.2;
  margin-block: auto;

  @include mix.mobile {
    width: 80px;
    height: 80px;
  }
}
.middle-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.result-text {
  font-family: var.$ff-barlow-700;
  font-size: 58px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @include mix.mobile {
    font-size: 24px;
  }
}
.play-again-button {
  padding: 12px 48px;
  background-color: var.$c-text-light;
  font-size: 18px;
  letter-spacing: 2px;
  color: var.$c-text-dark;
  border-radius: 8px;
  text-transform: uppercase;

  @include mix.mobile {
    font-size: 14px;
    padding: 12px 18px;
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>

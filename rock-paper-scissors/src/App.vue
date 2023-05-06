<script lang="ts">
import AppHeader from './components/AppHeader.vue'
import ButtonsTriangle from './components/ButtonsTriangle.vue'
import GameArea from './components/GameArea.vue'
import RulesButton from './components/RulesButton.vue'

export default {
  components: {
    AppHeader,
    ButtonsTriangle,
    GameArea,
    RulesButton
  },
  data() {
    return {
      score: 0,
      picked: 'paper',
      aiPicked: '',
      isPickMode: true,
      gameResult: ''
    }
  },
  methods: {
    setPicked(value: string) {
      this.isPickMode = false
      this.gameResult = ''
      const arr = ['paper', 'scissors', 'rock']
      const randomIndex = Math.floor(Math.random() * arr.length)
      const randomPick = arr[randomIndex]
      this.picked = value
      this.aiPicked = ''
      setTimeout(() => {
        this.aiPicked = randomPick

        if (value === randomPick) {
          this.gameResult = 'draw'
        } else if (
          (value === 'rock' && randomPick === 'scissors') ||
          (value === 'paper' && randomPick === 'rock') ||
          (value === 'scissors' && randomPick === 'paper')
        ) {
          this.score = this.score + 1
          this.gameResult = 'you won'
        } else {
          if (this.score > 1) {
            this.score = this.score - 1
          }
          this.gameResult = 'you lose'
        }
      }, 500)
    },
    enablePickMode() {
      this.isPickMode = true
    }
  },
  created() {
    return {}
  }
}
</script>

<template>
  <AppHeader :score="score" />
  <ButtonsTriangle v-if="isPickMode" :setPicked="setPicked" />
  <GameArea
    v-if="!isPickMode"
    :picked="picked"
    :aiPicked="aiPicked"
    :gameResult="gameResult"
    :enablePickMode="enablePickMode"
  />
  <RulesButton />
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import MoveButton from './MoveButton.vue'
export default {
  components: {
    MoveButton
  },
  props: {
    setPicked: Function
  }
}
</script>

<template>
  <div class="container">
    <img class="triangle-image" src="../assets/images/bg-triangle.svg" alt="triangle" />
    <div class="position-left-top">
      <MoveButton @click="setPicked && setPicked('paper')" type="paper" />
    </div>
    <div class="position-right-top">
      <MoveButton @click="setPicked && setPicked('scissors')" type="scissors" />
    </div>
    <div class="position-middle-bottom">
      <MoveButton @click="setPicked && setPicked('rock')" type="rock" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as var;
@use '../assets/styles/mixins.scss' as mix;

.container {
  position: relative;
  width: 500px;
  height: 400px;
  margin-inline: auto;
  margin-top: 48px;

  @include mix.mobile {
    width: 310px;
    height: 248px;
  }
}
.triangle-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @include mix.mobile {
    width: 200px;
  }
}
.position-left-top {
  position: absolute;
  top: 0;
  left: 0;
}
.position-right-top {
  position: absolute;
  top: 0;
  right: 0;
}
.position-middle-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>

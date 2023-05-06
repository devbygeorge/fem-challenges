<script lang="ts">
export default {
  props: {
    type: String,
    size: String
  }
}
</script>

<template>
  <button :class="`move-button ${type}-border ${size}-size`">
    <div class="button-innerground">
      <img
        v-if="type === 'paper'"
        class="button-icon"
        src="../assets/images/icon-paper.svg"
        alt=""
      />
      <img
        v-if="type === 'scissors'"
        class="button-icon"
        src="../assets/images/icon-scissors.svg"
        alt=""
      />
      <img v-if="type === 'rock'" class="button-icon" src="../assets/images/icon-rock.svg" alt="" />
    </div>
  </button>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables.scss' as var;
@use '../assets/styles/mixins.scss' as mix;

.move-button {
  width: 180px;
  height: 180px;
  padding: 16px;
  border-radius: 50%;

  &:hover {
    opacity: 0.9;
  }

  @include mix.mobile {
    width: 100px;
    height: 100px;
    padding: 12px;
  }
}
.paper-border {
  background: linear-gradient(var.$paper-gradient-1, var.$paper-gradient-2);
}
.scissors-border {
  background: linear-gradient(var.$scissors-gradient-1, var.$scissors-gradient-2);
}
.rock-border {
  background: linear-gradient(var.$rock-gradient-1, var.$rock-gradient-2);
}
.button-innerground {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 50%;
}
.button-icon {
  width: 70px;

  @include mix.mobile {
    width: 30px;
  }
}
.large-size {
  width: 280px;
  height: 280px;

  @include mix.mobile {
    width: 100px;
    height: 100px;
  }

  .button-icon {
    width: 120px;
    @include mix.mobile {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

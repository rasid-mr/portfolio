<template>
  <div>
    <div>about</div>
    <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
      <rect
        class="rect"
        ref="square"
        @click="rectm"
        x="12"
        width="10"
        height="10"
        rx="15"
      />
    </svg>
    <a :href="link">google</a>
    <p class="cardHeading">dsafddddddddddd</p>
    <p class="injectedColor">sdfaaaaaa</p>
  </div>
</template>

<script>
// import anime from "../../node_modules/animejs/lib/anime.es";
import anime from "animejs";

export default {
  methods: {
    rectm() {
      anime({
        targets: this.$refs.square,
        x: "80px",
        y: "30px",
        width: 20,
        fill: "#FF5733",

        easing: "easeInOutQuad",
      });
    },
  },
};
</script>

<style lang="scss">
 
 
.cardHeading {
  font-size: #{scaleValue(50)};
}
</style>

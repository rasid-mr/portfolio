<template>
  <the-header></the-header>
  <router-view> </router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: opacity 0.3s ease-in-out;
}
.route-leave-active {
  transition: opacity 0.3s ease-in;
}
html {
  font-size: 62.5%;
} /*10px*/

body {
  background: white;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
  padding: 0;
  margin: 0;
  @include respond(big-desktop) {
     margin: 0 20rem;
  }
  @media (min-width: 2000px) {
  
  }
}

p {
  margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  /* margin: 3rem 0 1.38rem; */
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: #{scaleValue(56.53)};
}

h2 {
  font-size: #{scaleValue(39.98)};
}

h3 {
  font-size: #{scaleValue(28.27)};
}

h4 {
  font-size: 1.999rem;
}

h5 {
  font-size: 1.414rem;
}

small,
.text_small {
  font-size: 0.707rem;
}
</style>

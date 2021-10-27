<template>
  <the-header></the-header>
  <router-view> </router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
  components: {
   TheHeader
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
  font-size: #{scaleValue(56.53)} !important;
}

h2 {
  font-size: #{scaleValue(39.98)} !important;
}

h3 {
  font-size: #{scaleValue(28.27)} !important;
}

h4 {
  font-size: 1.999rem;
}

h5 {
  font-size: 1.414rem;
}
 img::before {
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  border: 1px dashed hsl(0, 0%, 66.7%);
  display: block;
  height: 100%;
  border-radius: 4px;
  content: " ";
  position: absolute;
  width: 100%;
}

img::after {
  content: attr(alt);
  font-weight: bold;
  position: absolute;
  height: 100%;
  left: 0px;
  text-align: center;
  top: 1px;
  width: 100%;
}

img[alt] {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: $color-primary-violet;
}

@media screen and (min-width: 48em) {
  .flex {
    display: flex;
    flex-wrap: wrap;
    padding: 0.6em;
  }
}
</style>

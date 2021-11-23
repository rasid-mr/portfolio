<template>
  <the-header></the-header>

  <router-view v-slot="{Component, route}"> 
  <transition 
  mode="out-in"
  :name=route.meta.transition
  >
  <component :is="Component" />
  </transition>
  </router-view>
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
 
html {
  font-size: 65.5%;
  font-family: "Fira Sans", sans-serif;
  
} /*10px*/

body {
  // background: white;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #e7e7e7;
     
  margin: 0;
  @include respond(big-desktop) {
     margin: 0 20rem;
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
   
  line-height: 1.3;
}

.big {
  margin-top: 0;
  font-size: #{scaleValue(56.53)};
  @include respond(phone) {
    font-size: 1.66rem;
   
  }

}

.medium {
  font-size: #{scaleValue(39.98)}  ;
  margin-bottom: #{scaleValue(30)};
  //   @include respond(phone) {
  //   font-size: 2rem !important;
  // }
  @include respond(tab-port) {
    font-size: 2rem;
  }
}

.small {
  font-size: #{scaleValue(28.27)}  ;
  
}
//scrollbar
html {
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;
}

 body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-track {
    background-color: darkgrey;
}

body::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
     
}

//  img::before {
//   background: linear-gradient(to right, #bdc3c7, #2c3e50);
//   border: 1px dashed hsl(0, 0%, 66.7%);
//   display: block;
//   height: 100%;
//   border-radius: 4px;
//   content: " ";
//   position: absolute;
//   width: 100%;
// }

// img::after {
//   content: attr(alt);
//   font-weight: bold;
//   position: absolute;
//   height: 100%;
//   left: 0px;
//   text-align: center;
//   top: 1px;
//   width: 100%;
// }

// img[alt] {
//   text-align: center;
//   font-weight: bold;
//   font-size: 2rem;
//   color: $color-primary-violet;
// }

// @media screen and (min-width: 48em) {
//   .flex {
//     display: flex;
//     flex-wrap: wrap;
//     padding: 0.6em;
//   }
// }


.page-enter-active {
  animation: acrossIn .45s ease-out both;
  animation-delay: 1s;
} 

.page-leave-active {
  animation: acrossOut .65s ease-in both;
   animation-delay: 1s;
} 

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

</style>

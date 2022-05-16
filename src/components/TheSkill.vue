<template>
<div>

  <div class="skill">
     <h1 class="medium">MY SKILL STACK</h1>
    <div class="skill_story" ref="skillStory">

      <details open>
        <summary @click="arrowChange">
          HTML, CSS, JAVASCRIPT

          <svg
            class="arrow transitionArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
          </svg>
        </summary>
        <p>
          I learned HTML in my college days. Seeing the hello world in the
          computer screen amazeing. My curiosity thrieve me to go more deep
          level. I have a experience of HTML over 5 years. I can depict any page
          with html, css(BOOTSTRAP & OPEN), javascript.
        </p>
      </details>
      <details open>
        <summary @click="arrowChange">
          VUE.JS

          <svg
            class="arrow transitionArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
          </svg>
        </summary>
        <p>I know all the fundamentals of Vue js. Communication between component is very important in Vue js.
          I comprehend the state management system(Vuex) of Vue js. Vue router is a convenient solution for routing
         . Vue router transition makes the website more engaging to the user. 
        </p>
      </details>
      <details open>
        <summary @click="arrowChange">
        GSAP & animejs (animation)
          <svg
            class="arrow transitionArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
          </svg>
        </summary>
        <p>
          Gsap and animejs is two javascript animation library. I can morph Svg using animejs.
          ScrollTrigger plugin of gsap is a very productive element for front end dev. Implementing lazy loading in a website,
          make's website more pleaseable. Parrallax effect is on another level of enhancing user experience in a webpage.
        </p>
      </details>
    </div>
    <div class="skill_image">
      <div class="composition">
        <img
        loading="lazy"
          class="composition_photo-one composition_photo"
          srcset="
            ../assets/hand-art-phone.jpg  320w,
            ../assets/hand-art.jpg       1920w
          "
          sizes="(max-width: 56.25em) 25vw, (max-width: 37.5em) 25vw, 350px"
          src="../assets/hand-art.jpg"
          alt="Nothing is impossible"
        />

        <img
        loading="lazy"
          class="composition_photo-two composition_photo"
          srcset="
            ../assets/table-computer-phone.jpg  320w,
            ../assets/table-computer.jpg       1920w
          "
          sizes="(max-width: 56.25em) 25vw, (max-width: 37.5em) 25vw, 350px"
          src="../assets/table-computer.jpg"
          alt="Life has got all those twists and turns"
        />

        <img
        loading="lazy"
          class="composition_photo-three composition_photo"
          srcset="../assets/do-what-phone.jpg 320w, ../assets/do-what.jpg 1920w"
          sizes="(max-width: 56.25em) 25vw, (max-width: 37.5em) 25vw, 350px"
          src="../assets/do-what.jpg"
          alt="Friendship is another word for love"
        />
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  methods: {
    arrowChange(e) {
      if (e.srcElement.childNodes) {
        e.srcElement.childNodes[1].classList.toggle("rotation");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// header 

.transitionArrow {
  transition: transform 0.3s;
}
.arrow {
  fill: $color-primary-pink;
  pointer-events: none;

  width: #{scaleValue(24)};

  @include respond(tab-port) {
    margin-right: 0.5rem;
    width: #{scaleValue(40)};
  }
}
.rotation {
  transform: rotate(180deg);
}

.skill {
  // margin for free space
  margin-top: 12rem;
  margin-bottom: 15rem;
  padding: 0 $body-padding;

  @include respond(tab-port) {
    margin-top: 5rem;
    margin-bottom: 10rem;
  }
  @include respond(phone) {
    margin-bottom: 12rem;
     
  }

  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(2,1fr);
  grid-template-columns: repeat(2, 1fr);
  min-height: 850px;
  height: 100vh;
  @include respond(tab-port) {
    grid-auto-columns: 1fr;
    grid-template-rows:auto minmax(580px, 100vh) minmax(450px, 25vh);
    height: 105vh;
    min-height: 1230px;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
  @include respond(phone) {
    grid-auto-columns: 1fr;
    grid-template-rows:auto minmax(550px, 110vh) minmax(320px, 20vh);
    height: 85vh;
    min-height:1050px;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
  .medium {
  font-weight: bold;
  width: 70%;
  // padding: 2px 6px;
  font-size: #{scaleValue(80)};
   grid-column: 1/-1;
   margin-bottom: #{scaleValue(70)};
   color: $color-primary-cyan;
   @include respond(tab-port) {
    margin-bottom: #{scaleValue(90)};
    font-size: #{scaleValue(100)};
   }
   @include respond(phone) {
     font-size: #{scaleValue(140)};
   }
  }

  

  &_story {
    color: rgba($color-black, 0.6);
    // padding: 2px 6px;

    border: none;
  }
}
// animation for summary
details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}

@keyframes sweep {
  0% {
    opacity: 0;
    margin-left: -10px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}
details > summary {
  list-style: none;
  font-size: 2.5rem;

  @include respond(tab-port) {
    font-size: 1.8rem;
  }
}
details > summary::-webkit-details-marker {
  display: none;
}
details {
  padding: 1rem 0;
  @include respond(phone) {
    // padding: 3rem 0;
  }
}
details[open] > summary {
  color: $color-primary-cyan;
 
}

details[open] > p {
  color: rgba($color-primary-pink, 0.99);
  height: 33%;
  line-height: 1.7;
  font-size: 1.8rem;
    padding-top: #{scaleValue(20)};
  // padding-top: 5rem;
  @include respond(tab-land) {
    font-size: 1.5rem;
  }
  @include respond(tab-port) {
    font-size: 1.65rem;
    padding-top: #{scaleValue(30)};
  }
  @include respond(phone) {
    font-size: 1.35rem;
  }
}
summary {
  font-size: #{scaleValue(28.27)};
  @include respond(tab-port) {
    font-size: 1.5rem;
    padding: #{scaleValue(15)} #{scaleValue(8)};
  }
  padding: #{scaleValue(10)} #{scaleValue(8)};
  background: rgb(243, 243, 243, 0.2);

  @include respond(phone) {
    padding: #{scaleValue(15)} #{scaleValue(10)};
  }
  border: 1px solid #aaa;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // box-shadow: 0 4px 2px -2px rgba(#000, .1);
  box-shadow: 0 2px 2px rgba(#000, 0.1), 0 4px 4px rgba(#000, 0.1),
    0 6px 6px rgba(#000, 0.1);
  @include respond(phone) {
    box-shadow: 0 2px 2px rgba(#000, 0.1), 0 4px 4px rgba(#000, 0.1);
  }
}

// image style

.composition {
  position: relative;

  min-height: 100vh;
  // min-height: 100%;

  @include respond(tab-port) {
    // min-height: 400px; 
    min-height: 100%;
  }

  &_photo {
    display: block;
    width: #{scaleValue(400)};

    // filter: blur(4px);
    height: #{scaleValue(266.95)};

    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.4);
    border-radius: 2px;
    position: absolute;
  
    z-index: 10;
    transition: all 0.2s;
    outline-offset: #{scaleValue(20)};
    //  background: linear-gradient( rgb(156, 124, 18), rgb(209, 44, 44));
    //  background-blend-mode: screen;

    &-one {
      left: 44%;
     
      top: 11%;
      @include respond(tab-port) {
        top: 15%;
        left: 10%;
      }
      @include respond(phone) {
        top: 25%;
        left: 10%;
      }
    }
    &-two {
      top: 32%;
      left: 31%;
      @include respond(tab-port) {
        top: 8%;
        left: 35%;
      }
      @include respond(phone) {
        top: 18%;
        left: 35%;
      }
    }
    &-three {
      left: 12%;
      top: 53%;

      @include respond(tab-port) {
        top: 15%;
        left: 59%;
      }
      @include respond(phone) {
        top: 25%;
        left: 59%;
      }
    }
    &:hover {
      outline: #{scaleValue(15)} solid $color-primary-pink;
      transform: scale(1.05) translateY(-0.5rem);
      // filter: blur(0);
      box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
      z-index: 20;
    }
  }
  // &_photo  &_photo:not(:hover) {
  //   transform: scale(0.95);
  // }
}
</style>

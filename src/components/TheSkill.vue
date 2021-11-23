<template>
  <div class="skill">
    <div class="skill_story" ref="skillStory">
      <h2 class="medium">A quality Website can bring opportunities for you</h2>

      <details open>
        <summary @click="arrowChange" >   HTML, CSS, JAVASCRIPT 
         
          <svg class="arrow transitionArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        
        </summary>
        <p>
          I learned HTML in my college days. Seeing the hello world in the
          computer screen amazeing. My curiosity thrieve me to go more deep
          level. I have a experience of HTML over 5 years. I can depict any page
          with html, css, javascript.
        </p>
      </details>
      <details open>
        <summary  @click="arrowChange">   VUE.JS 
      
          <svg    class="arrow transitionArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </summary> 
        <p>
          Vue.js is one of the most famous javascript framework right now. It
          has 189k stars in github right now and it's growing so fast. It is a
          simple library with lot of feature with small bundle size. I made some
          site with vue.js, I exhit some of them below.
        </p>
      </details>
      <details open>
        <summary  @click="arrowChange">   SIGNLE PAGE APP(SPA)
       
          <svg class="arrow transitionArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
         
        </summary>
        <p>
          Due to the covid-19 pandemic, everything is going online from offline.
          Thus, the web developer industry very growing very fast. Among them
          SPA is surging very high. SPA site is very famous because they are
          most usable for an end user. Vue.js is specialized in making SPA site.
        </p>
      </details>
    </div>
    <div class="skill_image">
      <div class="composition">
        <img
         
          class="composition_photo-one composition_photo"
          src="../assets/roman-kraft-WOzVqzpScrk-unsplash.jpg"
          alt="Nothing is impossible"
        />

        <img  
          class="composition_photo-two composition_photo"
          src="../assets/tamara-gore-jfH6tHXvXlg-unsplash.jpg"
          alt="Life has got all those twists and turns"
        />

        <img 
          class="composition_photo-three composition_photo"
          src="../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg"
          alt="Friendship is another word for love"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
export default {
  mounted() {
    // const {skillStory} = this.$refs;
    // const skillStory = document.querySelector('.skill')
    // gsap.registerPlugin(ScrollTrigger)

    // const skillStoryTimeline = gsap.timeline();
    // skillStoryTimeline.from(skillStory, {
    //   opacity:0,
    //   duration:1,
    //   // yPercent:30,
    //   y:200,
    //   delay:1,
    //   ease:"back.out"
  
    // })


  },
  methods: {
    arrowChange(e) {
      if(e.srcElement.childNodes) { e.srcElement.childNodes[1].classList.toggle('rotation')}
    }

  },
};
</script>

<style lang="scss" scoped>
h2 {
  // text-decoration:;
  font-weight: bold;
}
.transitionArrow {
     transition: transform .3s;
}
.arrow {
 fill: $color-primary-pink;
 pointer-events: none;
  
 width: #{scaleValue(24)};
}
.rotation {
  transform: rotate(180deg);
}
 

 

.skill {
  margin-top: 10rem;
  margin-bottom: 15rem;
  
  @include respond(tab-port) {
    margin-top: 5rem;
    margin-bottom: 10rem;
  }
  @include respond(phone) {
    margin-bottom: 12rem;
  }

  
   
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
   height: 100vh;

  @include respond(tab-port) {
    grid-auto-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    height: 85vh;
    grid-template-columns: 1fr;
    grid-auto-flow: column;

  }
  @include respond(phone) {
    height: 60vh;
  }

  
  padding: 0 #{scaleValue(80)};

  &_story {
    color: rgba($color-black, .6);
    padding: 2px 6px;

    border: none;
  }
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
details {
  padding: 1rem 0;
  
  
  
   
}
details[open] > summary {
  color: $color-primary-cyan;
  
 
}

details[open] > p {
  color: rgba($color-black, .6);
  height: 33%;
  font-size: #{scaleValue(20)};
  @include respond(tab-port) {
    font-size: 1.5rem;
  }
  padding-top: #{scaleValue(10)};
  @include respond(phone) {
    font-size: 1.15rem;
  }
}
summary {
  font-size: #{scaleValue(28.27)};
  @include respond(tab-port) {
    font-size: 1.5rem;
  }
  padding: #{scaleValue(5)} #{scaleValue(8)};
  background:rgb(243, 243, 243, .2);
  @include respond(phone) {
    padding: 0 #{scaleValue(10)};
  }
  border: 1px solid #aaa;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px rgba(#000, .1);
   
}
 
 


// image style

.composition {
  position: relative;

  height: 100%;
  
  
  


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

    &-one {
      left: 44%;
      top: 11%;
      @include respond(tab-port) {
        top: 18%;
      left: 10%;
      }
    }
    &-two {
     top: 32%;
      left: 31%;
      @include respond(tab-port) {
        top: 11%;
      left: 35%;
      }
    }
    &-three {
      left: 12%;
      top: 53%;

         @include respond(tab-port) {
        top: 18%;
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
  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
}
</style>

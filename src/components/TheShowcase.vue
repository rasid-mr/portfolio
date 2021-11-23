<template>
  <section class="gsap" >
    <div class="slide-reveal slide slide-one">
      <div  class="image">
        <img class="img" src="../assets/1.png" alt="" />
        <div class="reveal-img"></div>
      </div>

      <div  class="slide_header">
        
          <h1 class="slide_header-hero">Thought.co is a online learning site.</h1>
          <p class="slide_header-info">
            It has huge resource on STEM subject. It also offers guidence to learning different language. I mostly read this sites chemistry and history article.
          </p>
      
        <div class="reveal-text"></div>
      </div> 
    </div>
    <div class="slide-reveal slide slide-two">
      <div  class="slide_header">
        
          <h1 class="slide_header-hero">I cloned this site🔥!!</h1>
          <p class="slide_header-info">
            Thought.co use most of the vue core feature. It is the most advanced and sofhisticate site, I have ever made.
          </p>
        
        <div class="reveal-text"></div>
      </div>
      <div  class="image">
        <img class="img" src="../assets/2.png" alt="" />
        <div class="reveal-img"></div>
      </div>
    </div>
    <div class="slide-reveal slide slide-three">
      <div  class="image">
        <img class="img" src="../assets/chemistry1.jpg" alt="" />
        <div class="reveal-img"></div>
      </div>

      <div  class="slide_header">
         
          <h1 class="slide_header-hero">Better things for better better living through Chemistry. </h1>
          <p class="slide_header-info">
            Chemistry is a challenging subject for most people, but it doesn't have to be. The number one reason people struggle with chemistry is that they don't approach it the right way.
          </p>
       
        <div class="reveal-text"></div>
      </div>
    </div>
    <div class="slide-reveal slide-four">
      <div class="image">
        <img class="img" src="../assets/chemistry2.jpg" alt="" />
        <div class="reveal-img"></div>
      </div>

      <div class="slide_header">
        
          <h1 class="slide_header-hero">  Chmeistry is a very hard subject.</h1>
          <p class="slide_header-info">
             If you make a certain molecule, that saves live. I think it's beutiful to do this.
          </p>
    
        <div class="reveal-text"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  
 
  mounted() {
    
    gsap.registerPlugin(ScrollTrigger);
    const slides = document.querySelectorAll(".slide");
 
    const slideReveal = document.querySelectorAll(".slide-reveal");
    slideReveal.forEach((slide, index, slideReveal) => {
       gsap.defaults({duration:  .5});
        const img = slide.querySelector("img");
        console.log(img)
           const revealText = slide.querySelector(".reveal-text");
           const revealImg = slide.querySelector(".reveal-img");
           const tl2 = gsap.timeline();
           tl2.fromTo(revealImg, { x: "0%" }, { x: "100%" });
           tl2.fromTo(img, { scale: 2 }, { scale: 1 }, "-=.5");
           tl2.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.25");

          ScrollTrigger.create({
            animation:tl2,
            start:"top top",
            trigger:slide,
            duration:.5,
             
            id:`new${index}`,
            toggleActions: "play none none pause",
          })
    })

    slides.forEach((slide, index, slides) => {
      gsap.defaults({ ease:"back", duration: 2 });
      let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
      console.log(nextSlide);

      ScrollTrigger.matchMedia({
        "(min-width:799px)": () => {

         
         

          //pin animation
          const tl = gsap.timeline();
          tl.to(slide, {
            opacity: 0,
            delay: 0.5,
            scale: 0.8,
            // y: -100,
          });

   
          

          ScrollTrigger.create({
            animation: tl,
            trigger: slide,
            start: "top top",
            end: () => "+=" + document.querySelector(".slide").offsetWidth,
            // end:'+=1000',
          
            pinSpacing: false,
            group:'leg',
            id: `${index}`,
            scrub: 0.5,
            pin: true,
            fastScrollEnd:true,
            anticipatePin: 1,
            pinnedContainer: ".gsap",
            toggleActions: "play pause resume none",
          
          });
       
 
        },
        "(max-width:800px)": function () {
          const tl = gsap.timeline();
          tl.to(slide, {
            opacity: 0,
            delay: 0.5,
            scale: 0.5,
          });

          ScrollTrigger.create({
            animation: tl,
            trigger: slide,
            group:'leg',
            start: "top top",
            // end: () => "+=" + document.querySelector(".slide").offsetWidth,
            end: "160%",
         
            pinSpacing: false,
            id: `${index}`,
            scrub: 0.5,
            pin: true,

            anticipatePin: 1,
            pinnedContainer: ".gsap",
            toggleActions: "play none none reset",
      
          });
 
 
        },
      });
    });

    // reveal animation
   ScrollTrigger.getAll().forEach(element => {
     element.enable();
     element.refresh();
     console.log(element.vars)
   })
  },
unmounted() {
  ScrollTrigger.getAll().forEach(element => {
    element.kill()
    console.log({element})
  })
}
};
</script>

<style lang="scss" scoped>
.gsap {
  background: $background-color;
  color: rgb(192, 192, 192);
  padding: 0 #{scaleValue(80)};
  
}
 
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-abailable;
  background: rgb(30, 30, 32);
  margin-bottom: #{scaleValue(170)};
  @include respond(tab-port) {
    flex-direction: column;
    // height: 70vh;
  }
}
.slide-four {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-abailable;
  margin: 0;
  background: rgb(30, 30, 32);
   @include respond(tab-port) {
    flex-direction: column;
   }

}

// slide header
.slide_header {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  padding: 0 #{scaleValue(20)};
   
  flex:1;
  flex-basis: 25rem;
  overflow: hidden;

  @include respond(tab-port) {
    order: -1;
    justify-content: flex-end;
    flex-shrink: 4;
     
     
  }
 

  &-hero {
    justify-self: flex-start;
    font-size: #{scaleValue(60)};
    margin-bottom:4rem;
    @include respond(tab-port) {
      font-size: #{scaleValue(80)};
      font-weight: 600;
    }
    @include respond(phone) {
      font-size: #{scaleValue(100)};
    }
    
  }
  &-info {
    font-size: #{scaleValue(25)};
    @include respond(tab-port) {
      font-size: 1.5rem;
    }
  }
}
// slide image container
.image {
  position: relative;
  flex: 1;
  flex-basis: 25rem;
  display: flex;
  overflow: hidden;
  @include respond(tab-port) {
    flex-basis: 10rem;
     justify-self: flex-start;
    
    flex-grow: 4;
  }
.img {
 
  width: 100%;
  height: 100%;
  object-fit: cover;
  @include respond(tab-port) {
    object-fit:contain;
  }
  
  }
}

.reveal-img,
.reveal-text {
  position: absolute;
  width: 110%;
  height: 150%;
  background: rgb(30, 30, 32);
  left:0;
  top: -15%;
}
 

 
</style>

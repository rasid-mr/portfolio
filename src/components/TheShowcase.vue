<template>
  <section class="gsap" >
    <div class="slide-reveal slide slide-one">
      <div  class="image">
        <img class="img" src="../assets/1.png" alt="" />
        <div class="reveal-img"></div>
      </div>

      <div  class="slide_header">
        
          <h1 class="slide_header-hero">Apple is a great company.</h1>
          <p class="slide_header-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            reprehenderit nostrum veritatis aperiam veniam excepturi, ad autem
            corrupti eos nesciunt.
          </p>
      
        <div class="reveal-text"></div>
      </div>
    </div>
    <div class="slide-reveal slide slide-two">
      <div  class="slide_header">
        
          <h1 class="slide_header-hero">Microsoft is a great company.</h1>
          <p class="slide_header-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            reprehenderit nostrum veritatis aperiam veniam excepturi, ad autem
            corrupti eos nesciunt.
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
         
          <h1 class="slide_header-hero">Aramco is a great company.</h1>
          <p class="slide_header-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            reprehenderit nostrum veritatis aperiam veniam excepturi, ad autem
            corrupti eos nesciunt.
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
        
          <h1 class="slide_header-hero">Aramco is a great company.</h1>
          <p class="slide_header-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            reprehenderit nostrum veritatis aperiam veniam excepturi, ad autem
            corrupti eos nesciunt.
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
       gsap.defaults({duration:  1});
        const img = slide.querySelector("img");
        console.log(img)
           const revealText = slide.querySelector(".reveal-text");
           const revealImg = slide.querySelector(".reveal-img");
           const tl2 = gsap.timeline();
           tl2.fromTo(revealImg, { x: "0%" }, { x: "100%" });
           tl2.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
           tl2.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");

          ScrollTrigger.create({
            animation:tl2,
            start:"top top",
            trigger:slide,
            duration:.5,
            markers:true,
            id:`new${index}`,
            toggleActions: "play pause play pause",
          })
    })

    slides.forEach((slide, index, slides) => {
      gsap.defaults({ ease: "back", duration: 2 });
      let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
      console.log(nextSlide);

      ScrollTrigger.matchMedia({
        "(min-width:801px)": () => {

         
         

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
            markers: true,
            pinSpacing: false,
            id: `${index}`,
            scrub: 0.5,
            pin: true,

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
            start: "top top",
            // end: () => "+=" + document.querySelector(".slide").offsetWidth,
            end: "160%",
            markers: true,
            pinSpacing: false,
            id: `${index}`,
            scrub: 0.5,
            pin: true,

            anticipatePin: 1,
            pinnedContainer: ".gsap",
            toggleActions: "play pause resume none",
          });
        },
      });
    });

    // reveal animation
   

  },
};
</script>

<style lang="scss" scoped>
.gsap {
  background: rgb(30, 30, 32);
  color: rgb(192, 192, 192);
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
}

.slide_header {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  // padding: 0 #{scaleValue(60)};
  justify-content: center;
  flex:1;
  flex-basis: 25rem;
  overflow: hidden;

  &-hero {
    justify-self: flex-start;
  }
  &-info {
    font-size: #{scaleValue(25)};
  }
}
.image {
  position: relative;
  flex: 1;
  flex-basis: 25rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
 

  .img {
  display: block;
  width: #{scaleValue(700)};
  height: #{scaleValue(550)};
  object-fit: cover;
  
  }
}

.reveal-img,
.reveal-text {
  position: absolute;
  width: 102%;
  height: 150%;
  background: rgb(30, 30, 32);
  left:0;
  top: -15%;
}
 

 
</style>

<template>
  <section class="gsap">
    <div class="slide-reveal slide slide-one">
      <div class="image">
         <a href="https://thoughtco-clone.netlify.app/" target="blank">
        <img
          srcset="
            ../assets/1-phone.jpg  320w,
            ../assets/1-tab.jpg   1000w,
            ../assets/1.png       1920w
          "
          sizes="(max-width: 56.25em) 62vw, (max-width: 37.5em) 90vw, 630px"
          class="img"
          src="../assets/1.png"
        />
         </a>
        <div class="reveal-img"></div>
      </div>

      <div class="slide_header">
        <h1 class="slide_header-hero">
        <a href="https://thoughtco-clone.netlify.app/" target="blank">
         <span class="highlight">Thought.co</span> is a online learning site.
        </a> 
        </h1>
        <p class="slide_header-info">
          It has huge resource on STEM subject. It also offers guidence to
          learning different language. I mostly read this sites chemistry and
          history article.
        </p>

        <div class="reveal-text"></div>
      </div>
    </div>
    <div class="slide-reveal slide slide-two">
      <div class="slide_header">
        <h1 class="slide_header-hero">
      <a href="https://thoughtco-clone.netlify.app/" target="blank">
           <span class="highlight">I cloned</span> this site❤️‍🔥!!
       </a>
        </h1>
        <p class="slide_header-info">
          Thought.co use most of the
          <span class="highlight">vue core feature</span>. It is the most
          advanced and sofhisticate site, I have ever made.
        </p>

        <div class="reveal-text"></div>
      </div>
      <div class="image">
        <a href="https://thoughtco-clone.netlify.app/" target="blank">
        <img
          srcset="
            ../assets/2-phone.jpg  320w,
            ../assets/2-tab.jpg   1000w,
            ../assets/2.png       1920w
          "
          sizes="(max-width: 56.25em) 62vw, (max-width: 37.5em) 90vw, 630px"
          class="img"
          src="../assets/2.png"
          alt="showcase photo"
        />
        </a>

        <div class="reveal-img"></div>
      </div>
    </div>
    <div class="slide-reveal slide slide-three">
      <div class="image">
        <a href="https://leafy-pothos-abeb64.netlify.app/" target="blank">
        
        <img
          srcset="
            ../assets/organic-1-mobile.jpg  768w,
            ../assets/organic-1-tab.jpg     1000w,
            ../assets/organic-1.jpg        1920w
          "
          sizes="(max-width: 56.25em) 62vw, (max-width: 37.5em) 90vw, 630px"
          class="img"
          src="../assets/organic-1.jpg"
        />
        </a>
        <div class="reveal-img"></div>
      </div>

      <div class="slide_header">
        <h1 class="slide_header-hero">
          <!-- <span class="highlight">Better</span> things for better living through -->
           <a href="https://thoughtco-clone.netlify.app/" target="blank">
          <span class="highlight">Organic </span> veg & fruits.
          </a>
        </h1>
        <p class="slide_header-info">
           The term<span class="highlight">“organic”</span>  refers to
          the way agricultural products are grown and processed.  <span class="highlight"> Organic crops </span>
          must be grown without the use of synthetic herbicides, pesticides, and
          fertilizers, or bioengineered genes (GMOs).
        </p>

        <div class="reveal-text"></div>
      </div>
    </div>
    <div class="slide-reveal slide-four">
      <div class="slide_header">
        <h1 class="slide_header-hero">
           <a href="https://thoughtco-clone.netlify.app/" target="blank">
           <span class="highlight"> Easy </span> way to get
            Organic veg & fruit.
           </a>
        </h1>
        <p class="slide_header-info">
         How your food is grown or raised can have a  <span class="highlight"> major impact </span> on your mental and emotional health as well as the environment. Organic foods often have more beneficial nutrients, such as antioxidants.
        </p>

        <div class="reveal-text"></div>
      </div>
      <div class="image">
          <a href="https://leafy-pothos-abeb64.netlify.app/" target="blank">
        <img
          srcset="
            ../assets/organic-2-mobile.jpg  768w,
            ../assets/organic-2-tab.jpg    768w,
            ../assets/organic-2.jpg        1920w
          "
          sizes="(max-width: 56.25em) 62vw, (max-width: 37.5em) 90vw, 630px"
          class="img"
          src="../assets/organic-2.jpg"
        />
          </a>
        <div class="reveal-img"></div>
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
      gsap.defaults({ duration: 0.5 });
      const img = slide.querySelector("img");
      // console.log(img);

      const revealText = slide.querySelector(".reveal-text");
      const revealImg = slide.querySelector(".reveal-img");
      const tl2 = gsap.timeline();
      tl2.fromTo(revealImg, { x: "0%" }, { x: "100%" });
      tl2.fromTo(img, { scale: 2 }, { scale: 1 }, "-=.5");
      tl2.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.25");

      ScrollTrigger.create({
        animation: tl2,
        start: "top top",
        trigger: slide,
        duration: 0.5,

        id: `new${index}`,
        toggleActions: "play none none pause",
      });
    });

    slides.forEach((slide, index, slides) => {
      gsap.defaults({ ease: "back", duration: 2 });
      let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
      // console.log(nextSlide);

      ScrollTrigger.matchMedia({
        "(min-width:799px)": () => {
          //pin animation
          const tl = gsap.timeline();
          tl.to(slide, {
            autoAlpha: 0,
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
            group: "leg",
            id: `${index}`,
            scrub: 0.5,
            pin: true,
            fastScrollEnd: true,
            anticipatePin: 1,
            pinnedContainer: ".gsap",
            toggleActions: "play pause resume none",
          });
        },
        "(max-width:800px)": function () {
          const tl = gsap.timeline();
          tl.to(slide, {
            autoAlpha: 0,
            delay: 0.5,
            scale: 0.5,
          });

          ScrollTrigger.create({
            animation: tl,
            trigger: slide,
            group: "leg",
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
    ScrollTrigger.getAll().forEach((element) => {
      element.enable();
      element.refresh();
      // console.log(element.vars);
    });
  },
  unmounted() {
    ScrollTrigger.getAll().forEach((element) => {
      element.kill();
      // console.log({ element });
    });
  },
};
</script>

<style lang="scss" scoped>

// styleing the header of each section.
h1 a {
  color:  rgb(192, 192, 192);
  text-decoration-style: none;
  text-decoration-color: $color-primary-pink;
   

  &:hover {
    // color: rgb(33, 176, 138);
    text-decoration-style: dotted;
  }
}
.gsap {
  background: $background-color;
  color: rgb(192, 192, 192);
  padding: 0 $body-padding;
  overflow: hidden;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.55;
  gap: 3rem;
  height: 100vh;
  background: rgb(30, 30, 32);
  margin-bottom: #{scaleValue(170)};

  @include respond(tab-port) {
    flex-direction: column;

    margin-bottom: #{scaleValue(530)};
  }
  @include respond(phone) {
    gap: 0;
  }
}
.slide-four {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3rem;
  line-height: 1.55;
  background: #1e1e20;
  margin-top: #{scaleValue(100)};

  @include respond(tab-port) {
    flex-direction: column;
  }
  @include respond(phone) {
    gap: 0;
  }
}

// slide header
.slide_header {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  padding: 0 #{scaleValue(20)};
  flex: 1;
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
    margin-bottom: 4rem;
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
    word-spacing: 1.3px;

    @include respond(tab-port) {
      font-size: 1.6rem;
    }
    @include respond(phone) {
      font-size: 1.4rem;
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
    flex-grow: 4;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @include respond(tab-port) {
      object-fit: contain;
    }
  }
}

.reveal-img,
.reveal-text {
  position: absolute;
  width: 110%;
  height: 150%;
  background: rgb(30, 30, 32);
  left: 0;
  top: -15%;
}
.highlight {
  color: rgb(235, 235, 235);
  font-weight: 600;
  padding: #{scaleValue(5)} 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
  white-space: nowrap;
  text-decoration: none;
  color: $color-primary-pink;

  display: inline-block;
  position: relative;
  padding: 0 0.23rem 0.2rem;
  isolation: isolate;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 0 100%;
    // background-color: rgba(white, .9);
    background: currentColor;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: scaley(0);
    transition: transform 0.25s;
    content: "";
  }
  &:hover,
  &:focus {
    &::after {
      transform: none;
    }
  }
}
</style>

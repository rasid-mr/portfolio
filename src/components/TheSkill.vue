<template>
  <div class="skill">
    <div class="skill_story">
      <h2>A quality Website can bring opportunities for you</h2>

      <details open>
        <summary>1. HTML, CSS, JAVASCRIPT</summary>
        <p>
          I learned HTML in my college days. Seeing the hello world in the
          computer screen amazeing. My curiosity thrieve me to go more deep
          level. I have a experience of HTML over 5 years. I can depict any page
          with html, css, javascript.
        </p>
      </details>
      <details open>
        <summary>2. VUE.JS</summary>
        <p>
          Vue.js is one of the most famous javascript framework right now. It
          has 189k stars in github right now and it's growing so fast. It is a
          simple library with lot of feature with small bundle size. I made some
          site with vue.js, I exhit some of them below.
        </p>
      </details>
      <details open>
        <summary>SIGNLE PAGE APP(SPA)</summary>
        <p>
          Due to the covid-19 pandemic, everything is going online from offline.
          Thus, the web developer industry very growing very fast. Among them
          SPA is surging very high. SPA site is very famous because they are
          most usable for an end user. Vue.js is specialized in making SPA site.
        </p>
      </details>
    </div>
    <div class="skill_image">
    <div class="compositon">
      <img
        class="compositon_photo-one compositon_photo"
        src="../assets/roman-kraft-WOzVqzpScrk-unsplash.jpg"
        alt=""
      />
      <img
        class="compositon_photo-two compositon_photo"
        src="../assets/tamara-gore-jfH6tHXvXlg-unsplash.jpg"
        alt=""
      />
      <img
        class="compositon_photo-three compositon_photo"
        src="../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg"
        alt=""
      />
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.skill {
 
   
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);


     background: url("../assets/circle-scatter-haikei.svg");
    background-size: cover;
    padding: 0 #{scaleValue(80)};
    
   

  &_story {   
    color: $color-primary-pink;
    padding: 2px 6px;
 
   
     
    border: none;
   

    
    
  }
}
details {
  padding: 1rem #{scaleValue(50)};
}
details[open] > summary {
  color: $color-primary-cyan;
}

details[open] > p {
  height: 33%;
  font-size: #{scaleValue(20)};
  @include respond(phone) {
    font-size: .8rem;
  }
}
summary {
  font-size: #{scaleValue(28.27)};
}

// image style
 

.compositon {
   
 position: relative;
    
   
    height: 100vh;
    @media screen and (max-width:60rem) {
      height: 60vh;
    }
  
 

  &_photo {
    display: block;
   width: #{scaleValue(400)};

   @media screen and (max-width:56.5em) {
    //  width: #{scaleValue(250)};

   }
    box-shadow: 0 1.5rem 4rem rgba($color-black, 0.4);
    border-radius: 2px;
    position: absolute;
 
    z-index: 10;
    transition: all 0.2s;
    outline-offset: #{scaleValue(20)};

   

    &-one {
    top: 32%;
  left: 31%;
  
    
    }
    &-two {
      left: 44%;
      top:11%;
      // transform: translate();
 
    }
    &-three {
     left: 12%;
     top:53%;
    }
     &:hover {
            outline: #{scaleValue(15)} solid $color-primary-pink;
            transform: scale(1.05) translateY(-.5rem);
            box-shadow: 0 2.5rem 4rem rgba($color-black, .5);
            z-index: 20;
        }
  }
   &:hover &__photo:not(:hover) {
        transform: scale(.95);
    }
}
 
</style>

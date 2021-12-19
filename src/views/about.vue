<template>
  <div class="app">
    <div class="custom-shape-divider-bottom-1639632917">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="allHeader">
 
    <h4 class="medium experience">My daily work and experience</h4>
    <h4 class="passionate">What do, I love and passionate.</h4>
    </div>
    
    <div class="about">
      <img srcset="../assets/sumon-phone.jpg 320w, ../assets/sumon.jpg 768w" 
           sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 26vw, 26vw" 
            alt="author photo"
            class="sumon"
            src="../assets/sumon.jpg"
      >
      <!-- <img class="sumon" src="../assets/sumon.jpg" alt="I am sumon" /> -->
      <p class="about-me-detail">
        When I was 8 years old, my mom give me 1 taka everyday for tiffin.
        Oneday I thought I store my one taka everyday, after many days it will
        be huge😁. I was so happy just think about it, I am goonna rich🤑 . I
        stated to save money below the almary in our house. Everything going on
        smoothly. In the fouth day, when I save 3 taka from three days. So,
        finally I can just expense todays one taka on that day so that I can eat
        "JALMURRY". Ohh I can remember the taste it was so tasty. I think
        maybeone more "JALLMURRY", won't be a bad idea. Eventually I expense my
        all money in just one day🤣🤣🤣. Becoming rich has never been true😂.
        <br />
        <br />

        I am chemistry mazor student at Jahangirnagor University. In my free
        time(full-time😁), I do programming. It's really amazeing to create a
        website from ground and I enjoy this so much.
        <br />
        I ❤ to watch movie. My favourite actor is Tom Cruise.
      </p>
    </div>
  </div>
</template>

<script>
//  import {gsap} from 'gsap';
//  import {ScrollTrigger} from 'gsap/ScrollTrigger'
export default {};
</script>

<style lang="scss" scoped>
.app {
 
  padding: 0 #{scaleValue(80)};
  color: $color-primary-pink;
  overflow: hidden;
  
   @include respond(tab-port){
    background: rgb(41, 41, 41);
  }
}
img {
  display: block;
  width: #{scaleValue(418)};
  float: left;
  margin-right: 5rem;

  @include respond(tab-port) {
    float: none;
    margin: 0 auto;
    width: #{scaleValue(500)};
  }
  

  // transform: translateX(-4rem) scale(1.4);
  backface-visibility: hidden;

  position: relative;
  overflow: hidden;

  border-radius: 50%;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    border-radius: none;
  }
}
.about {
  
  margin-top: 5rem;
 
}

.about-me-detail {
  font-size: #{scaleValue(24)};
  line-height: 1.5;
  @include respond(tab-port) {
    margin-top: 4rem;
    font-size: 2rem;
     color: rgb(235, 235, 235);
  }
  
}
.allHeader {
  margin-top: 3rem;
  @include respond(tab-port){
    display: flex;
    flex-direction: column;
  align-items: center;

  }
}
.custom-shape-divider-bottom-1639632917 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: -1;
}

.custom-shape-divider-bottom-1639632917 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1639632917 .shape-fill {
  fill: #2b0729;
}

/** For mobile devices **/
@include respond(tab-port) {
  .custom-shape-divider-bottom-1639632917 svg {
    width: calc(100% + 1.3px);
    height: 0px;
  }
}
</style>

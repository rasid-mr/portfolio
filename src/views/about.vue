<template>
<div class="app">

   <h2 class="about-me">About me</h2>
   <h4 class="experience">My daily work and experience</h4>
   <h4 class="passionate">What do, I love and passionate.</h4>
   <div class="about">
     <img src="../assets/sumon2.JPG" alt="">
     <p class='about-me-detail'>When I was 8 years old, my mom give me 1 taka everyday for tiffin. Oneday I thought I store my one taka everyday, after many days it will be huge😁. I was so happy just think about it, I am goonna rich🤑 . I stated to save money below the almary in our house. Everything going on smoothly. In the fouth day, when I save 3 taka from three days. So, finally I can just expense todays one taka on that day so that I can eat "JALMURRY". Ohh I can remember the taste it was so tasty. I think maybeone more "JALLMURRY", won't be a bad idea. Eventually I expense my all money in just one day🤣🤣🤣. Becoming rich has never been true😂. 
       <br>
       <br>
   
        I am chemistry mazor student a Jahangirnagor University. In my free time(full-time), I do programming. It's really amazeing to create a website from ground and I enjoy this so much. 
        <br>
        I ❤ to watch movie. My favourite actor is Tom Cruise. 
        </p>
        
   </div>
</div>

 

</template>

<script>
 
export default {

  // mounted() {
  //    gsap.registerPlugin(ScrollTrigger);
  // gsap.from({
  //     scrollTrigger: {
  //       trigger:'.hello',
  //       start:'bottom center'
  //     },
  //     x:600
  //   })
  // },
};
</script>

<style lang="scss" scoped>
.hello {
  margin-top: 40rem;
  margin-bottom: 40rem;
  height: 9rem;
  width: 20rem;
  background: cadetblue;
}
 .app {
// margin-top: #{scaleValue(107)};
// height: calc(100vh - #{scaleValue(107)});
// overflow: hidden;
padding: 0 #{scaleValue(80)};
color: $color-primary-pink;
 
 
}
 img {
   display: block;
  
  // max-width: 95rem;
  width: #{scaleValue(300)};

  // place-self: center;
  justify-self: center;
  // border-radius: 10%;
clip-path: polygon(9% 0, 90% 0, 100% 11%, 100% 92%, 91% 100%, 13% 100%, 0 90%, 0 10%);
 
 }
 .about {
   display: grid;
   grid-auto-flow: column;
grid-template-columns:#{scaleValue(545)} #{scaleValue(893)} ;
grid-template-rows: calc(100vh- #{scaleValue(107)});
margin-top: 5rem;


}
 
 .about-me-detail {
  font-size: #{scaleValue(24)};
background: linear-gradient(rgb(255, 228, 228) 25%, palegreen 60%, #fff);

 }
</style>

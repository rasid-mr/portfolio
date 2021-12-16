<template>
<div class="the-header" ref="header">


  <header class="nav-header">
    <router-link to="./home">
    <svg version="1.1" class="logo" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 43.2 8.7" style="enable-background:new 0 0 43.2 8.7;" xml:space="preserve">
<g>
	<path d="M6.9,6.8c0.3-0.5,0.5-1.2,0.5-1.9c0-1.1-0.6-1.7-1.4-1.7c-0.8,0-1.2,0.4-1.6,1.5C4,6.1,3.3,6.9,2.2,6.9
		C0.9,6.9,0,5.9,0,4.3c0-0.8,0.2-1.4,0.4-1.8l0.9,0.3C1.1,3,0.9,3.6,0.9,4.3c0,1.1,0.7,1.5,1.2,1.5c0.8,0,1.1-0.5,1.6-1.6
		C4.2,2.9,4.8,2.2,6,2.2c1.2,0,2.3,0.9,2.3,2.8c0,0.8-0.2,1.6-0.5,2.1L6.9,6.8z"/>
</g>
<g>
	<path d="M11,0.1v4.8c0,1.8,0.8,2.6,1.9,2.6c1.2,0,2-0.8,2-2.6V0.1h1.1v4.7c0,2.5-1.3,3.5-3.1,3.5c-1.7,0-2.9-0.9-2.9-3.5V0.1H11z"
		/>
</g>
<g>
	<path d="M25,4.7c-0.1-1.1-0.1-2.5-0.1-3.5h0c-0.3,0.9-0.6,2-1,3.1l-1.4,3.9h-0.8l-1.3-3.9c-0.4-1.1-0.7-2.2-0.9-3.1h0
		c0,1-0.1,2.4-0.2,3.6L19,8.2h-1l0.6-8.1h1.3L21.3,4c0.3,1,0.6,1.9,0.8,2.7h0C22.3,5.9,22.6,5.1,23,4l1.4-3.9h1.3l0.5,8.1h-1L25,4.7
		z"/>
</g>
<g>
	<path d="M34.9,4.1c0,2.8-1.7,4.3-3.8,4.3c-2.1,0-3.6-1.7-3.6-4.1c0-2.6,1.6-4.2,3.8-4.2C33.5,0,34.9,1.7,34.9,4.1z"/>
	<path d="M28.6,4.2c0,1.7,0.9,3.3,2.6,3.3c1.7,0,2.6-1.5,2.6-3.4c0-1.6-0.8-3.3-2.6-3.3C29.5,0.9,28.6,2.4,28.6,4.2z"/>
</g>
<g>
	<path d="M37.1,8.7V0.6h1.1l2.6,4.1c0.6,0.9,1.1,1.8,1.5,2.6l0,0c-0.1-1.1-0.1-2.1-0.1-3.3V0.6h1v8.1h-1.1l-2.6-4.1
		C39,3.7,38.4,2.7,38,1.9l0,0c0.1,1,0.1,2,0.1,3.3v3.5H37.1z"/>
</g>
</svg>
    </router-link>
      <div class="burger" @click="navToggle">
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
    </header>
    <nav class="nav-bar">
      <ul class="nav-links">
        <router-link class="router" to="./home" @click="hideNav">HOME</router-link>
     
        <router-link class="router" to="./about" @click="hideNav">ABOUT</router-link>
       
       <a href="https://twitter.com/mohtasim_hasan" class="router">Twitter</a>
       
      </ul>
      <div class="header_contact">
        <h1 class="big"><span> !! </span>Loose Yourself <span> !! </span></h1>
        <p>
           
        </p>
      </div>
    </nav>
    </div>
</template>
 

<script>
import {gsap} from 'gsap';
 
export default {
  data() {
    return {
      observer:null
    }
  },
  mounted() {
     
    
    // const header = document.querySelector('.the-header');
    const skill = document.querySelector('.parent-Container')

    // const header = this.$refs.header;
    const header = document.querySelector('.the-header')
    // const skill = this.$refs.skill;
    console.log(header, skill, 'skill')
    const stickyNav  = function(entries) {
      const [entry] = entries;
      console.log(entry)
      if(!entry.isIntersecting) { header.classList.add('sticky')}
      else{header.classList.remove('sticky')}
    }
const navHeight = header.getBoundingClientRect().height;
   this.observer = new IntersectionObserver(stickyNav, {
      threshold:0,
      root:null
      // rootMargin:`document.querySelector('.parent-Container').offsetWidth px`,
      // rootMargin:`${navHeight}px`
    })
     
     if(!skill) {this.observer.disconnect()} 
     else {this.observer.observe(skill)}  
   

 

    

  },
 
   methods: {
   navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1",   { rotate: "135",smoothOrigin:true,  transformOrigin:"37%", background: "black", duration:.5 });
    gsap.to(".line2",   { rotate: "-135", smoothOrigin:true,  transformOrigin:"37% ", background: "black", duration:.5  });
    gsap.to("#logo",   { color: "black", duration:1 });
    gsap.to(".nav-bar",  { clipPath: "circle(2500px at 100% -10%)", duration:1 });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1",  { rotate: "0", y: 0, background: "black", duration:.5  });
    gsap.to(".line2",  { rotate: "0", y: 0, background: "black", duration:.5  });
    gsap.to("#logo", { color: "white", duration:.5  });
    gsap.to(".nav-bar", { clipPath: "circle(50px at 100% -10%)", duration:1 });
    document.body.classList.remove("hide");
  }
}, 
hideNav() {
  gsap.to(".line1",  { rotate: "0", y: 0, background: "black", duration:.5  });
    gsap.to(".line2",  { rotate: "0", y: 0, background: "black", duration:.5  });
    gsap.to("#logo", { color: "white", duration:.5  });
    gsap.to(".nav-bar", { clipPath: "circle(50px at 100% -10%)", duration:1 });
    document.body.classList.remove("hide");
},
 
 
   },
   unmounted() {
     this.observer.disconnect()
     console.log('destroy')
   },
};
</script>

<style lang="scss">
.nav-header {
  min-height: 8vh;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: #ebebeb;
  width: 100%;
  padding: 2rem #{scaleValue(80)};
  z-index: 2;
  position: relative;
}
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
 
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  opacity: 1;
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);
  box-sizing: border-box;

  & > *  {
    flex:1 1 auto
  }
}
//child of nav-bar
.nav-links {
  display: flex;
  flex-flow: column nowrap;
  font-size: 3rem;
  @include respond(tab-port){
    font-size: 2.5rem;

  }
  & > * {
    flex: 1 1 8rem;
     align-self: center;
     display: flex;
     align-items: center;
     @include respond(tab-port){
       flex: 1 1 6rem;
     }    
     
  }
}
 
.header_contact {
  font-size: 3rem;
  flex-basis: 10rem;
   
}
// router-link 
.router,
.router:visited {
    color: #0099ff;
    text-decoration: none;
    white-space: nowrap;
    cursor:pointer;
    transition: opacity .2s;
    &:hover {
      opacity: .6;
    }
    
}
.router-link-active {
  text-decoration: underline;
}
.burger {
  cursor: pointer;
}
.line1,
.line2 {
  width: 3rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: rgb(0, 0, 0);
  pointer-events: none;
}
body.hide {
  overflow: hidden;
}
.logo {
  width: 10rem;
  fill: $color-primary-pink;
}
 .sticky {
   position: sticky;
   left: 0;
   top: 0;
   z-index: 20000;
 }
 

 

span {
  color: $color-primary-pink;
}
 
</style>

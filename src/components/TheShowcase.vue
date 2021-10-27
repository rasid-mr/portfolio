<template>
  <div class="show" ref="el">
    <h1>SHOWCASE</h1>
    <h3>Built with Vue.js</h3>

    <div class="show_website">
      <img
        src="../assets/1.png"
        class="pic"
        alt=" Photo for my Portfolio(thouhtco.com)"
      />

      <img
        src="../assets/2.png"
        class="pic"
        alt=" Photo for my Portfolio(thouhtco.com)"
      />
      <img
        src="../assets/chemistry1.jpg"
        class="pic"
        alt="Chemistry Website Photo"
      />

      <img
        src="../assets/chemistry2.jpg"
        class="pic"
        alt="Chemistry Website PHoto"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    var observerCallback = function (entries, _) {
      const [entry] = entries;
      console.log(entry.target);
      if (!entry.isIntersecting) return;

      // entry.target.classList.add('section--hidden')
      //  document.querySelectorAll('.pic').forEach(img => {
      //  img.classList.add('section--hidden')

      //
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("section--hidden");
        }
      });
    };

    var obsOptions = {
      root: null,
      threshold: 0,
    };

    this.observer = new IntersectionObserver(observerCallback, obsOptions);

    document.querySelectorAll(".pic").forEach((img) => {
      this.observer.observe(img);
    });
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>
<style lang="scss" scoped>
.show {
  height: 100vh;
  // background: url("../assets/background-skillshowcase.svg");
  background-size: cover;
  //   margin-top: -1.8rem;
  padding: 0 #{scaleValue(80)};

  @include respond(tab-port) {
    height: 80vh
  }
  @media only screen and (max-width:650px) {
    
  
    height: 100vh;
  }
 

  &_website {
    margin: 0 #{scaleValue(50)};
    display: grid;
    grid-auto-flow: row;
    row-gap: #{scaleValue(25)};

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
     @media only screen and (max-width:650px) {
      grid-template-columns:min-content;
      grid-template-rows: repeat(4, minmax(15rem, 1fr));
      gap: 0;
    }
    // place-items: center;

    justify-content: space-evenly;
  }
}
h1 {
  padding-top: 5rem;
  // margin-left: #{scaleValue(50)};
}
h3 {
  margin-left: #{scaleValue(50)};
}
h1,
h3 {
  color: $color-primary-pink;
}

// img

img {
  display: block;
  width: #{scaleValue(500)};
  aspect-ratio: 16/9;
  @include respond(tab-port) {
    width: 25rem;
    height: auto;
  }
  transition: transform 0.3s;
  height: #{scaleValue(243.19)};
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
}

// if image is not avaibable for any reason.



// intersection observer api

.section--hidden {
  animation: slide 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(20rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <div class="show" ref="el">
    <header>
       
    <h1 class="built">Built with Vue.js</h1>

    </header>
   

    <div class="show_website">
      <div class="slider">
        <div class="slide">
          <img
            src="../assets/1.png"
            class="pic"
            alt=" Photo for my Portfolio(thouhtco.com)"
          />
        </div>

        <div class="slide">
          <img
            src="../assets/2.png"
            class="pic"
            alt=" Photo for my Portfolio(thouhtco.com)"
          />
        </div>

        <div class="slide">
          <img
            src="../assets/chemistry1.jpg"
            class="pic"
            alt="Chemistry Website Photo"
          />
        </div>
        <div class="slide">
          <img
            src="../assets/chemistry2.jpg"
            class="pic"
            alt="Chemistry Website PHoto"
          />
        </div>

        <button class="slider__btn slider__btn--left">&larr;</button>
        <button class="slider__btn slider__btn--right">&rarr;</button>
        <div class="dots"></div>
      </div>
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

  // mounted() {
  //   var observerCallback = function (entries, _) {
  //     const [entry] = entries;
  //     console.log(entry.target);
  //     if (!entry.isIntersecting) return;

  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio > 0) {
  //         entry.target.classList.add("section--hidden");
  //         // console.log('well-done')
  //       }
  //     });
  //   };

  //   var obsOptions = {
  //     root: null,
  //     threshold: 0,
  //   };

  //   this.observer = new IntersectionObserver(observerCallback, obsOptions);

  //   document.querySelectorAll(".pic").forEach((img) => {
  //     this.observer.observe(img);
  //   });


  //   // slider 
  
  // },
  // destroyed() {
  //   this.observer.disconnect();
  // },
  mounted() {
      const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  

  const activateDot = function (slide) {
    // remove the style from ex-active dot
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    // adding the style to active dot.
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    // length isn't 0 based,
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
  },
};
</script>

<style lang="scss" scoped>
.show {
  margin-top: 15rem;
   margin-bottom: 8rem;
   padding: 0 #{scaleValue(80)};
  @include respond(tab-land) {
    margin-top: 0rem;
    
   
  }
  @include respond(tab-port) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  box-sizing: border-box;
}
// slider

.slider {
  max-width: 110rem;
  height: 50rem;
  margin: 0 auto;
  position: relative;
  border-radius: 1rem;
  /* IN THE END */
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* THIS creates the animation! */
  transition: transform 1s;
}

.slide > img {
  /* Only for images that have different size than slide */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider__btn {
  position: absolute;
  top: 50%;
  z-index: 10;

  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  color: #333;
  border-radius: 50%;
  height: 5.5rem;
  width: 5.5rem;
  font-size: 3.25rem;
  cursor: pointer;
}

.slider__btn--left {
  left: 6%;
  transform: translate(-50%, -50%);
}

.slider__btn--right {
  right: 6%;
  transform: translate(50%, -50%);
}

.dots {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

button .dots_dot {
  border: none;
  background-color: #b9b9b9;
  opacity: 0.7;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 1.75rem;
  cursor: pointer;
  transition: all 0.5s;

  /* Only necessary when overlying images */
  /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); 
}

.dots__dot:last-child {
  margin: 0;
}

.dots__dot--active {
  /* background-color: #fff; */
  background-color: #888;
  opacity: 1;
}

 
// .pic {
//   display: block;
//   width: 30rem;
//   aspect-ratio: 16/9;
// }
.built{
  margin: 2rem 0;
  display: grid;
  place-items: center;
  font-size: 4rem;
   background: -webkit-linear-gradient($color-primary-pink, $color-primary-violet);
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h1 {
  color: $color-primary-violet;
}
</style>

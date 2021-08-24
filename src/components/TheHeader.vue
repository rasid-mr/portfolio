<template>
 
      <header class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
        <!-- <span class="parent"> -->

        <div class="name">
          <div class="name__container">
            <router-link to="/" class="name__self">
              <span class="name__self-logo"> Sumon </span>
            </router-link>
          </div>
        </div>
        <div class="twitter">
          <div class="twitter__container">
            <router-link to="/" class="twitter__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Logo Twitter</title>
                <path
                  d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                />
              </svg>
            </router-link>
          </div>
        </div>
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <router-link to="/" class="navigation__link"> Home </router-link>
            </li>
            <li class="navigation__item">
              <router-link to="/about" class="navigation__link">
                About Me</router-link
              >
            </li>
            <li class="navigation__item">
              <router-link to="/contact" class="navigation__link">
                Contact</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- </span> -->
      </header>
 
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


// @use '../../assets/sass/header';
@import "../assets/sass/_header.scss";
</style>

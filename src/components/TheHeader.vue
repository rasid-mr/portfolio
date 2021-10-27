<template>
  <nav class="navigation navbar navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SUMON</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <router-link
            tag="li"
            to="./home"
            class="offcanvas-title routerLink"
            id="offcanvasNavbarLabel"
          >
            Home
          </router-link>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <router-link
              tag="li"
              to="./contact"
              class="nav-item routerLink"
              aria-current="page"
            >
              Contact
            </router-link>
            <router-link
              tag="li"
              to="./about"
              class="nav-item routerLink"
              aria-current="page"
            >
              About me
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "bootstrap";

.navbar-toggler {
  padding: 0.5rem 1rem;

  height: 5vh;
}
.navbar-toggler,
.navbar-toggler-icon {
  display: flex;
  align-items: center;
}
.navbar-toggler-icon {
  width: 2.5rem;
  height: 2.5rem;
}
.navbar-brand {
  font-size: #{scaleValue(56.53)};
}

.nav-link {
  font-size: 3rem;
}

.routerLink {
  text-decoration: none;
  color: rgba($color: $color-black, $alpha: 0.7);
  font-size: #{scaleValue(48)};
}


// @use '../../assets/sass/header';
// @import "../assets/sass/_header.scss";
.navigation {
  z-index: 5000;
  padding: 0 #{scaleValue(80)};
}
</style>

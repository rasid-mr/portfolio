import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        :root {
          
        }
        
        @function scaleValue($value, $ideal-viewport-width:1600) {
          @return calc(
            #{$value} * (clamp(350px, 100vw, 3840px) / #{$ideal-viewport-width})
          );
        }
        .cardHdeading {
          font-size: #{scaleValue(30)};
        }
        $nav-height:9rem;
        $color-primary-violet: #512D6D;
        $color-primary-pink: #F8485E;
        $color-primary-light: #EEEEEE;
        $color-primary-cyan:#00C1D4;
        $background-color:  rgb(30, 30, 32);
        $color-white: #fff;
        $color-black: #000;
        $body-padding:#{scaleValue(80)};

        @mixin respond($breakpoint) {
          @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em) {
              @content;
            } //600px
          }
          @if $breakpoint == tab-port {
            @media only screen and (max-width: 56.25em) {
              @content;
            } //900px
          }
          @if $breakpoint == tab-land {
            @media only screen and (max-width: 75em) {
              @content;
            } //1200px
          }
          @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em) {
              @content;
            } //1800
          }
        }
        
        `,
      },
    },
  },
});

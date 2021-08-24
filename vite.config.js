import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        :root {
          --ideal-viewport-width: 1600;
        }
        
        @function scaleValue($value) {
          @return calc(
            #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
          );
        }
        .cardHdeading {
          font-size: #{scaleValue(30)};
        }
      
        $color-primary-violet: #512D6D;
        $color-primary-pink: #F8485E;
        $color-primary-light: #EEEEEE;
        $color-primary-cyan:#00C1D4;
        $color-white: #fff;
        $color-black: #000;
        `,
      },
    },
  },
});

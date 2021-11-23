<template>
 
    <div class="footer">
      <div>
<h2 class="big">Get in touch</h2>
      </div>
      
     
      <div class="contact-social">
      <primary-button class="mailTo" @click="mailTo">Mail Me</primary-button>
      <div class="social">
        <a href="https://www.facebook.com/mohtasim.hasan.35">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Logo Facebook</title>
            <path
              d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <a href="https://twitter.com/mohtasim_hasan">
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
        </a>
      </div>
    </div>
       </div>
</template>
<script>
import primaryButton from "../Layout/primary-button.vue";
export default {
  data: () => ({ value: "recent" }),
  components: {
    primaryButton,
  },
  methods: {
    mailTo() {
      window.open("mailto:mohtasim.chemist@gmail.com");
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  height: #{scaleValue(295)};
  background: rgb(11,6,8);
  background: radial-gradient(circle, rgba(11,6,8,1) 7%, rgba(40,40,40,1) 25%, rgba(0,0,0,1) 100%);
  color: $color-primary-pink;
  // display: grid;
  // grid-template-rows: repeat(2, 1fr);
  // grid-template-columns: repeat(4, 1fr);
  // grid-auto-flow: column;
  display: flex;
  flex-flow: column;
  @include respond(phone) {
    height: #{scaleValue(600)};
  }

  
}
.mailTo {
  margin-left: #{scaleValue(80)};
  // width: max-content;
  white-space: nowrap;
   
}
h2 {
  margin-left: #{scaleValue(80)};
  padding-top: 2rem;


}
.contact-social {
  display: flex;
  align-items: center;
  margin-top: 3rem;
}
svg {
  fill: $color-primary-cyan;
   
  width: 5rem;
  @include respond(tab-port) {
    width: 4rem;
  }
  @include respond(phone) {
    width: 3.5rem;
  }
  margin: 0 1rem;
  cursor: pointer;
}
 

</style>

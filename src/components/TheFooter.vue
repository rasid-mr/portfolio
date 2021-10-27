<template>
<span>


    <div class="footer">
        <h2>Get in touch</h2>
        <primary-button class="mailTo" @click="mailTo">Mail Me</primary-button>

    </div>
 
  </span>
</template>
<script>

import primaryButton from '../Layout/primary-button.vue'
export default {
      data: () => ({ value: 'recent' }),
    components: {
        primaryButton
    },
    methods: {
        mailTo() {
            window.open('mailto:mohtasim.chemist@gmail.com');
        }
    },
}
</script>
<style lang="scss" scoped>
    .footer {
        height: 40vh;
        background: #001220;
        color: $color-primary-pink;
        display: flex;
        flex-direction: column;
        @include respond(tab-port) {
            height: 20vh;
        }
        
    }
    .mailTo {
        
        margin-top: #{scaleValue(30)};
        margin-left: #{scaleValue(100)};
        width: 12%;
        
       
        display: flex;
         
        justify-content: center;
        flex-wrap: nowrap;
        
       

    }
    h2 {
         margin-top: #{scaleValue(30)};
        margin-left: #{scaleValue(100)};
       
    }

</style>
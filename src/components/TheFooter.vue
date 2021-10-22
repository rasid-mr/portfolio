<template>
    <div class="footer">
        <h2>Get in touch</h2>
        <primary-button class="mailTo" @click="mailTo">Mail Me</primary-button>

    </div>
</template>
<script>
import primaryButton from '../Layout/primary-button.vue'
export default {
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
        background: url('../assets/footer.svg');
        color: $color-primary-pink;
        display: flex;
        flex-direction: column;
        @include respond(tab-port) {
            height: 20vh;
        }
        
    }
    .mailTo {
        padding: #{scaleValue(10)} #{scaleValue(20)};
        margin-top: #{scaleValue(30)};
        margin-left: #{scaleValue(100)};
        width: 12%;
        font-size: #{scaleValue(40)};
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
       

    }
    h2 {
         margin-top: #{scaleValue(30)};
        margin-left: #{scaleValue(100)};
       
    }

</style>
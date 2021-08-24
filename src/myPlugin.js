export default {
    install: (app, option) => {
        app.mixin({
            data() {
                return {
                    link:'https://google.com'
                }
            },
            created() {
                console.log('created')
            },
            // app.provide('')
        })
    }
}
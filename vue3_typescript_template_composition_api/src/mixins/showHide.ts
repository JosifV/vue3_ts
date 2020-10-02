export default {
    data() {
        return {
            showTitle: false
        }
    },
    methods: {
        titleToggleHandler() {
            let that: any = this!
            that.showTitle = !that.showTitle
        }
    }
};
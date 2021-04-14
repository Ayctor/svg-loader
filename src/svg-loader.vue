<script>
export default {
    name: 'SvgLoader',

    props: ['src'],

    template: '<svg role="img"></svg>',

    mounted() {
        this.setSrc();
    },

    methods: {
        setSrc() {
            this.$el.innerHTML = `<use xlink:href="${this.src}" />`;
        },
    },

    watch: {
        src() {
            this.setSrc();
        },
    },
};
</script>

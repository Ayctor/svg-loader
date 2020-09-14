<template>
    <svg role="img"><use :xlink:href="src" /></svg>
</template>

<script>
export default {
    name: 'SVGLoader',
    props: ['src', 'classList'],
    mounted() {
        this.setContent();
    },
    methods: {
        setContent() {
            if (this.classList && this.classList !== '') {
                const classListArray = this.classList.split(' ');
                if (classListArray && classListArray.length > 0) {
                    classListArray.forEach(element => {
                        this.$el.classList.add(element);
                    });
                }
            }
        },
    },
    watch: {
        src() {
            this.setContent();
        },
    },
};
</script>

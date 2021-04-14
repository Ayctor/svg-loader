var script = {
    name: 'SvgLoader',

    props: ['src'],

    template: '<svg role="img"></svg>',

    mounted: function mounted() {
        this.setSrc();
    },

    methods: {
        setSrc: function setSrc() {
            this.$el.innerHTML = "<use xlink:href=\"" + (this.src) + "\" />";
        },
    },

    watch: {
        src: function src() {
            this.setSrc();
        },
    },
};

script.__file = "src/svg-loader.vue";

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('SVGLoader', script);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
script.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default script;

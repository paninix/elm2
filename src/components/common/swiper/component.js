import Base from '@/base/base.vue'

export default Base.extend({
    data() {
        return {
            
        }
    },
    computed: {
        refs() {
            return this.$store.getters.getRefs;
        }
    },
    methods: {
        doScroll: function() {
            var swiper = this.refs.swiper,
                bar = this.refs.bar,
                type = this.refs.type;
            if(window.pageYOffset > bar.offsetHeight) {
                swiper.style.position = type.style.position = 'fixed';
                type.style.top = swiper.offsetHeight + 'px';
            } else {
                swiper.style.position = 'static';
                type.style.position = 'absolute';
                type.style.top = 0;
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.doScroll);
    },
    mounted() {
        this.$store.dispatch('addRef', {
            name: 'swiper',
            value: this.$refs.swiper
        });
    }
})
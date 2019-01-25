import cart from '@/components/common/cart/ui';
import Base from '@/base/base.vue'

import GoodCache from '@/axios/good/cache'
import util from '@/util';

export default Base.extend({
  components: {
    cart
  },
  data() {
    return {
      goods: [],
      arr: [1,2,3,4,5,6,7,8,9,10]
    };
  },
  computed: {
    refs() {
      return this.$store.getters.getRefs;
    },
    cart() {
      return this.$store.getters.getCart;
    }
  },
  methods: {
    getGood: function() {
      this.goodCache.getGoods({
        success: res => {
          this.goods = res
        }
      })
    },
    addFood: function(food) {
      this.$store.dispatch("addOrder", food);
    },
    subFood: function(food) {
      this.$store.dispatch("subOrder", food);
    },
    doScroll: function(index) {
      var ref = this.$refs[index][0],
          bar = this.refs.bar,
          swiper = this.refs.swiper;
      var target = ref.offsetTop + bar.offsetHeight - swiper.offsetHeight;
      var leader = window.scrollY;
      util.scrollAnimation({
        leader, target,
        speed: 30,
        step: 5
      });
    },
    
  },
  created: function() {
    this.goodCache = new GoodCache() 
    this.getGood();
  },
  mounted: function() {
    this.$store.dispatch('addRef', {
      name: 'type',
      value: this.$refs.orderType
    });
  }
})
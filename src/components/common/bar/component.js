import Base from '@/base/base.vue'
import SellerCache from '@/axios/seller/cache'


export default Base.extend({
    data() {
      return {
        seller: {
          supports:[{}]
        },
        isShowIntro: false
      };
    },
    methods: {
      toggleShowIntro: function(){
        this.isShowIntro = !this.isShowIntro;
      }
    },
    created: function() {
      this.sellerCache = new SellerCache({});
      this.sellerCache.getSeller({
        success: res=>this.seller = res
      });
    },
    mounted: function() {
      this.$store.dispatch('addRef', {
        name: 'bar',
        value: this.$refs.bar
      });
    }
  })
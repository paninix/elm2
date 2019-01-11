import Base from '@/base/base.vue'
import SellerCache from '@/axios/seller/cache'


export default Base.extend({
    data() {
      return {
        
      };
    },
    created: function() {
      this.sellerCache = new SellerCache({});
      this.sellerCache.getSeller({
        success: res=>this.seller = res
      });
    }
  })
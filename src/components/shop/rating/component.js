import Base from '@/base/base.vue'
import SellerCache from '@/axios/seller/cache'

export default Base.extend({
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    created: function() {
      this.sellerCache = new SellerCache() 
    }
  })
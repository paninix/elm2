import Base from '@/base/base.vue'
import SellerCache from '@/axios/seller/cache'

export default Base.extend({
    data() {
      return {
        ratings: [],
        seller: {},
        isActive:'0',
      };
    },
    methods: {
      getRatings: function(type) {
        this.isActive = type;
        this.sellerCache.getRatings({
          data:type,
          success:res => {
            this.ratings = res;
          }
        })
      },
      getSeller: function() {
        this.sellerCache.getSeller({
          success:res => {
            this.seller = res;
          }
        })
      }
    },
    filters: {
      localeDate: function(time) {
        return new Date(Number(time)).toLocaleDateString().replace(/\//g,'.');
      }
    },
    created: function() {
      this.sellerCache = new SellerCache() 
      this.getRatings('0');
      this.getSeller();
    }
  })
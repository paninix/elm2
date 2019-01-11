import Base from '@/base/base.vue'
import cart from '@/components/common/cart/ui'

import GoodCache from '@/axios/good/cache'
export default Base.extend({
    components: {
        cart
    },
    data() {
        return {
           
        };
    },
    methods: {
        
    },
    created: function () {
        this.goodCache = new GoodCache()
    }
})
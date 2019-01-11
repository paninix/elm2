import Base from '@/base/base.vue'

import UserCache from '@/axios/user/cache'
export default Base.extend({
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    created: function() {
        this.userCache = new UserCache()
    }
})
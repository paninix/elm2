import types from './types.js'

const actions={
	//购物车加入一件商品
	addOrder({commit,state},food) {
		let cart = state.cart;
		state.total += food.price;
		//如果商品已经在订单中
		if(cart[food.foodId]) {
			cart[food.foodId].count++;
			cart[food.foodId].total += food.price;
		} else { //如果商品不在订单中
			cart[food.foodId] = food;
			cart[food.foodId].count = 1;
			cart[food.foodId].total = food.price;
		}
	},
	//购物车减去一件商品
	subOrder({commit,state},food) {
		let cart = state.cart;
		state.total -= food.price;
		//如果商品已经在订单中
		if(cart[food.foodId]) {
			//购物车里就最后一件商品了
			if(cart[food.foodId].count === 1) {
				delete cart[food.foodId];
			} else {
				cart[food.foodId].count--;
				cart[food.foodId].total -= food.price;
			}
		}
		//如果商品不在订单中 高级漏洞
	},
	//清空购物车
	cleanOrder({commit,state}) {
		state.cart = {};
		state.total = 0;
	},
	//改变登录状态
	changeLoginState({commit,state}) {
		state.isLogin = !state.isLogin;
	},
	addRef({commit,state}, ref) {
		state.refs[ref.name] = ref.value;
	}
}

export default actions;
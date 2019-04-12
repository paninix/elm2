import axios from 'axios'
import setting from './setting'

let httpURL = "http://www.xuguobin.club/api/elm/" //这是我服务器的api接口
let localURL = 'http://localhost/api/elm/';     //这是本地koa2的api接口

axios.defaults.baseURL = httpURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default class AxiosCache {
	constructor() {
		this.__config = {}
		this.__setting = setting;
		this.init();
	}

	init() {
		this.doFlushSetting(CACHE_KEY, )
	}

	doFlushSetting(key, conf) {
		if (!key && typeof key !== 'string') {
			return
		}
		this.__config[key] = conf
	}

	resultJudge(code) {
		return code
	}

	sendRequest(key, options) {
		let send = this.__config[this.settingKey][key];
		let self = this;
		let baseURL = send.url;
		send.method == 'get'
			? options.data && (send.url += options.data)
			: send.data = options.data
		axios(send)
			.then(function (res) {
				send.url = baseURL;
				if (self.resultJudge(res.data.status)) {
					options.success(res.data.data)
				} else {
					options.fail
						? options.fail(res.data.data)
						: self.handleErrorCase(res.data.status)
				}
			}).catch(function (err) {
				self.handleErrorCase(err)
			})
	}

	handleErrorCase(err) {
		if (typeof err == 'Number') {
			console.log(err)
		} else {
			alert(err)
		}
	}
}
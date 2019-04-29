import request from '../utils/request'
import {routerRedux} from 'dva/router'

const user = {
	namespace: 'user',
	state: {
		isLogin: false
	},
	effects: {
		*login({payload}, {put, call}) {
			let res = yield call(
				request('user/login', {
					method: 'post',
					data: payload
				})
			)

			let data = res.data
			if (data.code === 200) {
				window.sessionStorage.setItem('isLogin', true)
				window.sessionStorage.setItem('userName', data.userName)
				yield put({type: 'userlogin', payload: {isLogin: true}})
				yield put(routerRedux.push('/home'))
			} else {
				alert(data.message)
			}
		}
	},
	reducers: {
		userlogin(state, {payload}) {
			// console.log(payload)
			return {...payload}
		}
	}
}

export default user

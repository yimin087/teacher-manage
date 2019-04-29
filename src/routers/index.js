import React from 'react'
// 配置路由规则
import {Router, Route, Switch} from 'dva/router'
import Home from '../pages/home'
import SignIn from '../pages/signin'

export default function({history, app}) {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" exact component={SignIn} />
				<Route path="/home" component={Home} />
				<Route path="/signin" component={SignIn} />
			</Switch>
		</Router>
	)
}

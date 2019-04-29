// 1: 引入dva
import dva from 'dva'
import createHistory from 'history/createBrowserHistory'
import router from './routers'
import modelIndex from './models'
import modelUser from './models/user'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/index.css'
// 2: 创建dva的实例app对象
const app = dva({
	history: createHistory()
})
// 3: 配置路由 app.router(fn);
app.router(router)
// 4: app.use();  //安装插件
// 5: 注册模块app.model({});  {state,effects,reducers}
app.model(modelIndex)
app.model(modelUser)
// 5.5: 卸载模块 app.unmodel();
// 6: app.start('#root')
app.start('#root')

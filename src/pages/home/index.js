import React, {Component} from 'react'

import {connect} from 'dva'
import avatar from '../../assets/imgs/monkey.png'

class Home extends Component {
	render() {
		console.log(this.state)
		return (
			<React.Fragment>
				<div>
					<div className="aside">
						<div className="profile">
							<div className="avatar img-circle">
								<img src={avatar} alt="" />
							</div>
						</div>

						<div className="navs">
							<ul className="list-unstyled">
								<li>
									<div className="nav-item">
										<i className="fa fa-home" />
										仪表盘
									</div>
								</li>
								<li>
									<div className="nav-item">
										<i className="fa fa-bell" />
										用户管理
									</div>
								</li>
								<li>
									<div className="nav-item">
										<i className="fa fa-bell" />
										讲师管理
									</div>
								</li>
								<li>
									<div className="nav-item">
										<i className="fa fa-cog" />
										课程管理
										<i className="arrow fa fa-angle-right" />
									</div>
								</li>
								<li>
									<div className="nav-item" href="../advert/list.html">
										<i className="fa fa-bell" />
										广告管理
									</div>
								</li>
								<li>
									<div className="nav-item">
										<i className="fa fa-cog" />
										系统设置
										<i className="arrow fa fa-angle-right" />
									</div>
									<ul className="list-unstyled">
										<li>
											<div className="nav-item">网站设置</div>
										</li>
										<li>
											<div className="nav-item">权限管理</div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div className="main">
						<div className="container-fluid">
							<div className="header">
								<nav className="navbar navbar-custom">
									<div className="navbar-header">
										<div className="nav-item navbar-brand">
											<i className="fa fa-navicon" />
										</div>
									</div>
									<ul className="nav navbar-nav navbar-right">
										<li>
											<div className="nav-item">
												<i className="fa fa-bell" />
												<span className="badge">8</span>
											</div>
										</li>
										<li>
											<div className="nav-item">
												<i className="fa fa-user" />
												个人中心
											</div>
										</li>
										<li>
											<div className="nav-item">
												<i className="fa fa-sign-out" />
												退出
											</div>
										</li>
										<li>
											<div className="nav-item">
												<i className="fa fa-tasks" />
											</div>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default connect(state => {
	return {
		num: state.index.num
	}
})(Home)

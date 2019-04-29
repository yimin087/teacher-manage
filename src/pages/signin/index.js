import React, {Component} from 'react'
import {connect} from 'dva'
import {Redirect} from 'dva/router'
import avatar from '../../assets/imgs/monkey.png' // 告诉webpack管理这个图片

class Signin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: ''
		}
	}
	doSignin(e) {
		e.preventDefault()
		let {userName, password} = this.state
		// 调用dispatch传递参数
		this.props.dispatch({
			type: 'user/login',
			payload: {
				userName,
				password
			}
		})
	}
	render() {
		let {userName, password} = this.state
		let {isLogin} = sessionStorage || this.props
		console.log(isLogin)
		return (
			<React.Fragment>
				{isLogin && <Redirect to="/home" />}
				<div className="login">
					<div className="login-wrap">
						<div className="avatar">
							<img src={avatar} className="img-circle" alt="" />
						</div>

						<form
							className="col-xs-offset-1 col-xs-10"
							onSubmit={e => this.doSignin(e)}
						>
							<div className="input-group input-group-lg">
								<span className="input-group-addon">
									<i className="fa fa-user" />
								</span>
								<input
									id="name"
									type="text"
									className="form-control"
									placeholder="用户名"
									value={userName}
									onChange={e => this.setState({userName: e.target.value})}
								/>
							</div>
							<div className="input-group input-group-lg">
								<span className="input-group-addon">
									<i className="fa fa-key" />
								</span>
								<input
									id="pass"
									type="password"
									className="form-control"
									placeholder="密码"
									value={password}
									onChange={e => this.setState({password: e.target.value})}
								/>
							</div>
							<button
								type="submit"
								className="btn btn-lg btn-primary btn-block"
							>
								登 录{`${this.props.isLogin}`}
							</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default connect(state => {
	return {
		isLogin: state.user.isLogin
	}
})(Signin)

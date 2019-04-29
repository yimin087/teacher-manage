import React, {Component} from 'react'
import {connect} from 'dva'

class Home extends Component {
	render() {
		return (
			<div>
				{this.props.num}
				<button
					onClick={() => {
						this.props.dispatch({type: 'index/changeNum', payload: {num: 2}})
					}}
				>
					变更num
				</button>
			</div>
		)
	}
}

export default connect(state => {
	return {
		num: state.index.num
	}
})(Home)

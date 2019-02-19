import React, { Component } from 'react';
import { connect } from 'react-redux';
//import actionHandler from './actionHandler';

class World extends Component {
	//const { player, largeView } = this.props;
	render() {
		return(
			<div
				style={{
					position: 'relative',
				}}
			>
			</div>
		);	
	}
}

export default connect(null, null)(World);
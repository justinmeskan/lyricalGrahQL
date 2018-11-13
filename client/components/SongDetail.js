import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import song from '../queries/fetchSong';


class SongDetail extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h2> Song Detail </h2>
			</div>
		)
	}
}

export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);	
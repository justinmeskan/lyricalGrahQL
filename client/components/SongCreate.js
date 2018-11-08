import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
	constructor(){
		super()
		this.state = { title: ''};
	}

	onSubmit(e){
		e.preventDefault();
		this.props.mutate({
			variables: {
				title: this.state.title
			}
		})
	}

	render() {
		return (
			<div>
				<h3> create a new song </h3>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label> Song Title:</label>
					<input onChange={e => this.setState({ title: e.target.value })} value={this.state.title} />
				</form>
			</div>
		)
	}
}

const mutation = gql`
	mutation AddSong($title: String){
		addSong(title: $title){
			title
		}
	}
`;

export default graphql(mutation)(SongCreate);	













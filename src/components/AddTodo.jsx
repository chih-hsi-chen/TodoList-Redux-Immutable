import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = { input: "" };
	}

	updateInput = input => {
		this.setState({ input });
	};

	handleAddTodo = () => {
		// dispatches actions to add todo
		this.props.addTodo(this.state.input);

		// sets state back to empty string
		this.setState({ input: '' });
	};

	render() {
		return (
			<div>
				<input
					onChange={e => this.updateInput(e.target.value)}
					value={this.state.input}
				/>
				<button className="add-todo" onClick={this.handleAddTodo}>
					Add Todo
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	addTodo,
};

export default connect(
	null,
	mapDispatchToProps
)(AddTodo);

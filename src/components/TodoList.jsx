import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../helpers/selector";

const TodoList = ({ todos }) => {
	console.log('todo list render');
	
	return (
		<div>
			<ul className="todo-list">
				{todos && todos.length
					? todos.map((todo, index) => {
						return <Todo key={`todo-${todo.id}`} todo={todo} />;
					})
					: "No todos, yay!"}
			</ul>
		</div>

	);
};

const mapStateToProps = (state) => {
	const { visibilityFilter } = state;
	const todos = getTodosByVisibilityFilter(state, visibilityFilter);
	return {
		todos,
	};
};

export default connect(
	mapStateToProps
)(TodoList);

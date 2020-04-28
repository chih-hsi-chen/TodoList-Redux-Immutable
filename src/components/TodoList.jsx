import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getVisibleTodos } from "../helpers/selector";

const TodoList = ({ todos }) => {
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
	return {
		todos: getVisibleTodos(state),
	};
};

export default connect(
	mapStateToProps
)(TodoList);

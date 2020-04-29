import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/actions";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
	console.log(`${todo.id} is rendering`);
	return (
		<li
			className="todo-item"
			onClick={() => toggleTodo(todo.id) /** dispatches action to toggle todo */}
		>
			{todo && todo.completed ? "👌" : "👋"}{" "}
			<span
				className={`todo-item__text ${todo && todo.completed && "todo-item__text--completed"}`}
			>
				{todo.content}
			</span>
			<button
				onClick={(e) => {
					e.stopPropagation();
					deleteTodo(todo.id);
				}}
			>delete</button>
		</li>
	);
};

export default connect(
	null,
	{
		toggleTodo,
		deleteTodo
	}
)(Todo);

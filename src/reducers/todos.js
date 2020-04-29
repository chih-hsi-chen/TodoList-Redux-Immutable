import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO
} from "../constants/actionType";
import { fromJS, Record } from "immutable";

const initialState = fromJS([]);

const TodoItem = Record({
	content: '',
	completed: false,
	id: ''
});
export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TODO: {
			const { id, content } = action.payload;

			return state
				.push(
					TodoItem({
						content,
						completed: false,
						id
					})
				);
		}
		case TOGGLE_TODO: {
			const { id } = action.payload;

			return state
				.map(todo => {
					let completed = todo.get('completed');
					
					return todo.get('id') === id ? todo.set('completed', !completed) : todo;
				});
		}
		case DELETE_TODO: {
			const { id } = action.payload;
			
			return state
				.filter(todo => todo.get('id') !== id);
		}
		default:
			return state;
	}
}

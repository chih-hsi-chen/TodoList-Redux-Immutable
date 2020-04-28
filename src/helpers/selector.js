import { VISIBILITY_FILTERS } from "../constants/filterType";
import { createSelector } from "reselect";

// selectors
const getVisibilityFilter = (store) => store.visibilityFilter.type;
const getTodos = store =>
	getTodoIDList(store).map(id => getTodoById(store, id));


const getTodosState = (store) => store.todos;

const getTodoIDList = store =>
	getTodosState(store) ? getTodosState(store).allIds : [];

const getTodoById = (store, id) =>
	getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getVisibleTodos = createSelector(
	[ getVisibilityFilter, getTodos ],
	( visibilityFilter, todos ) => {
		switch (visibilityFilter) {
			case VISIBILITY_FILTERS.COMPLETED:
				return todos.filter(todo => todo.completed);
			case VISIBILITY_FILTERS.INCOMPLETE:
				return todos.filter(todo => !todo.completed);
			case VISIBILITY_FILTERS.ALL:
			default:
				return todos;
		}
	}
);
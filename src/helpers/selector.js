import { VISIBILITY_FILTERS } from "../constants/filterType";
import { createSelector } from "reselect";

// selectors
const getVisibilityFilter = (store) => store.getIn(['visibilityFilter']);
const getTodos = (store) => store.getIn(['todos']);

export const getVisibleTodos = createSelector(
	[ getVisibilityFilter, getTodos ],
	( visibilityFilter, todos ) => {
		const filterType = visibilityFilter.get('type');
		
		switch (filterType) {
			case VISIBILITY_FILTERS.COMPLETED:
				return todos.filter(todo => todo.completed).toJS();
			case VISIBILITY_FILTERS.INCOMPLETE:
				return todos.filter(todo => !todo.completed).toJS();
			case VISIBILITY_FILTERS.ALL:
			default:
				return todos.toJS();
		}
	}
);

export const getFilterInfo = createSelector(
	[ getVisibilityFilter ],
	( visibilityFilter ) => {
		return {
			type: visibilityFilter.get('type'),
			index: visibilityFilter.get('index')
		};
	}
);
import { SET_FILTER } from "../constants/actionType";
import { VISIBILITY_FILTERS } from "../constants/filterType";

const initialState = {
	type: VISIBILITY_FILTERS.ALL,
	index: 0,
};

const visibilityFilter = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER: {
			return {
				type: action.payload.type,
				index: action.payload.index
			};
		}
		default: {
			return state;
		}
	}
};

export default visibilityFilter;
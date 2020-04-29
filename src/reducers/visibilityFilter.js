import { SET_FILTER } from "../constants/actionType";
import { VISIBILITY_FILTERS } from "../constants/filterType";
import Immutable from "immutable";

const initialState = Immutable.fromJS({
	type: VISIBILITY_FILTERS.ALL,
	index: 0,
});

const visibilityFilter = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER: {
			const { type, index } = action.payload;

			return state
				.setIn(['type'], type)
				.setIn(['index'], index);
		}
		default: {
			return state;
		}
	}
};

export default visibilityFilter;
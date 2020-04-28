import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO
} from "../constants/actionType";

const initialState = {
	allIds: [],
	byIds: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TODO: {
			const { id, content } = action.payload;
			return {
				...state,
				allIds: [...state.allIds, id],
				byIds: {
					...state.byIds,
					[id]: {
						content,
						completed: false
					}
				}
			};
		}
		case TOGGLE_TODO: {
			const { id } = action.payload;
			return {
				...state,
				byIds: {
					...state.byIds,
					[id]: {
						...state.byIds[id],
						completed: !state.byIds[id].completed
					}
				}
			};
		}
		case DELETE_TODO: {
			const {id: deletedID} = action.payload;
			const { [deletedID]: test, ...rest } = state.byIds;
			
			return {
				...state,
				allIds: state.allIds.filter(id => id !== deletedID),
				byIds: { ...rest }
			};
		}
		default:
			return state;
	}
}

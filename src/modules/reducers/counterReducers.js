export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
	count: 0,
	isIncrementing: false,
	isDecrementing: false
}

/**
 * This function defines the reducers in this counter file
 * --> Multiple of these reducers may be called when an action is called by the UI.
 * --> This way we do not need to remember to run successions of reductions and actions to perform a desired outcome
 * --> Each reducer first starts with the state that is spread out, then things are added or changed in it.
 * --> State is always returned and is the default return if the action is not found
 * @param state
 * @param action
 * @returns {*}
 */

const counter = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_REQUESTED:
			return {
				...state,
				isIncrementing: true
			}

		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
				isIncrementing: !state.isIncrementing
			}

		case DECREMENT_REQUESTED:
			return {
				...state,
				isDecrementing: true
			}

		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
				isDecrementing: !state.isDecrementing
			}

		default:
			return state
	}
}

export default counter;

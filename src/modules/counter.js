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
 * This file is not used in the project
 * --> it is the combination of the reducers and actions in the expanded folders.
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = initialState, action) => {
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

/**
 * This is an example of a set of actions action we would call to increment the counter
 * --> It combines the 2 actions together into a pure exported function
 * --> INCREMENT_REQUESTED + INCREMENT
 * --> The exact same is true for the other functions below. Have a look.
 * @returns {function(*)}
 */
export const increment = () => {
	return dispatch => {
		dispatch({
			type: INCREMENT_REQUESTED
		})

		dispatch({
			type: INCREMENT
		})
	}
}

export const incrementAsync = () => {
	return dispatch => {
		dispatch({
			type: INCREMENT_REQUESTED
		})

		return setTimeout(() => {
			dispatch({
				type: INCREMENT
			})
		}, 3000)
	}
}

export const decrement = () => {
	return dispatch => {
		dispatch({
			type: DECREMENT_REQUESTED
		})

		dispatch({
			type: DECREMENT
		})
	}
}

export const decrementAsync = () => {
	return dispatch => {
		dispatch({
			type: DECREMENT_REQUESTED
		})

		return setTimeout(() => {
			dispatch({
				type: DECREMENT
			})
		}, 3000)
	}
}

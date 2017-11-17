export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

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
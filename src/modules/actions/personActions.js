export const UPDATE_NAME = 'person/UPDATE_NAME'

export const updateName = (name) => {
  return dispatch => {
    dispatch({
      type: UPDATE_NAME,
      name
    })
  }
}
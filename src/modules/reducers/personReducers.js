export const UPDATE_NAME = 'person/UPDATE_NAME'

const initialState = {
  name: ""
}

const person = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      }

    default:
      return state
  }
}

export default person;

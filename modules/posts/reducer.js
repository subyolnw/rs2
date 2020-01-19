import { LOAD_POSTS_SUCCESS } from './actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return action.payload

    case 'ADD_POST':
      return [action.payload, ...state]
    default:
      return state
  }
}

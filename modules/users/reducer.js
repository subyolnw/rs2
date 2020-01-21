import { LOAD_USERS_SUCCESS } from './actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

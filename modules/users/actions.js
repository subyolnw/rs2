import axios from 'axios'

const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS'

function fetchUsers() {
  return async dispatch => {
    const res = await axios.get('/users')
    const action = { type: LOAD_USERS_SUCCESS, payload: res.data }

    dispatch(action)
  }
}

export { LOAD_USERS_SUCCESS, fetchUsers }

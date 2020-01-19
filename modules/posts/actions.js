import axios from 'axios'

const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'

function fetchPosts() {
  return async dispatch => {
    dispatch({ type: LOAD_POSTS_REQUEST })
    const res = await axios.get('/posts')

    dispatch({
      type: LOAD_POSTS_SUCCESS,
      payload: res.data
    })
  }
}

export { LOAD_POSTS_SUCCESS, fetchPosts }

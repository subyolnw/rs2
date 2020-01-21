import { combineReducers } from 'redux'

import comments from './comments/reducer'
import photos from './photos/reducer'
import posts from './posts/reducer'
import todos from './todos/reducer'
import users from './users/reducer'
import ui from './ui/reducer'

export default combineReducers({
  comments,
  photos,
  posts,
  todos,
  users,
  ui
})

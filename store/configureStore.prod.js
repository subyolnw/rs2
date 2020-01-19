import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from '@modules/reducers'

function configureStore(initialState, options) {
  const middleware = [ReduxThunk]

  return createStore(reducers, initialState, applyMiddleware(...middleware))
}

export default configureStore

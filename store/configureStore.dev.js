import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '@modules/reducers'

function configureStore(initialState, options) {
  const middleware = []

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export default configureStore

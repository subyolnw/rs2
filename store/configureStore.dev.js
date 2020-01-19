import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import reducers from '@modules/reducers'

function configureStore(initialState, options) {
  const middleware = [ReduxThunk]

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export default configureStore

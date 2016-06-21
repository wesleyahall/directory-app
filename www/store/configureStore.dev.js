import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index.js'
import { persistState } from 'redux-devtools'

const logger = createLogger()

export default function configureStore (initialState) {
  let middleware = applyMiddleware()
  let enhancer

  if (process.env.NODE_ENV !== 'production') {
    let middlewares = [thunk, logger]
    middleware = applyMiddleware(...middlewares)

    let getDebugSessionKey = function () {
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
      return (matches && matches.length) ? matches[1] : null
    }

    enhancer = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : require('../containers/DevTools.js').default.instrument(),
      persistState(getDebugSessionKey())
    )
  } else {
    enhancer = compose(middleware)
  }

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

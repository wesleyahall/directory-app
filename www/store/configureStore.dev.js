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
      // By default we try to read the key from ?debug_session=<key> in the address bar
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
      return (matches && matches.length) ? matches[1] : null
    }

    enhancer = compose(

      // Middleware we want to use in development
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : require('../containers/DevTools.js').default.instrument(),

      // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
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
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

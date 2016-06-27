import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index.js'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

const logger = createLogger()
const engine = createEngine('cci-directory')

export default function configureStore (initialState) {
  const storageMiddleWare = storage.createMiddleware(engine)
  let middleware
  let enhancer

  if (process.env.NODE_ENV !== 'production') {
    let middlewares = [storageMiddleWare, thunk, logger]
    middleware = applyMiddleware(...middlewares)

    enhancer = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : require('../containers/DevTools.js').default.instrument()
    )
  } else {
    enhancer = compose(middleware)
  }

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  const load = storage.createLoader(engine)
  load(store)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const initialAppState = {}

const store = configureStore(initialAppState)

render(
  <Root store={store} />,
  document.getElementById('app')
)

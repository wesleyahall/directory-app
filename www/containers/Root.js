import React from 'react'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import routes from '../routes'

export default class Root extends React.Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

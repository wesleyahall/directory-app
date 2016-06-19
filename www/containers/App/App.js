import './App.styl'
import React from 'react'
import FooterNav from '../../components/FooterNav'
import 'react-fastclick'

class App extends React.Component {
  blurFocus () {
    document.activeElement.blur()
  }

  render () {
    const { children } = this.props
    return (
      <div onTouchStart={this.blurFocus}>
        <main>
        {children}
        </main>
        <FooterNav />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App

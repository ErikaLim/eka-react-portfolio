import React from 'react'
import Header from './header.jsx'
import Menu from './menu.jsx'

export default class Master extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Menu />
      </div>
    )
  }
}

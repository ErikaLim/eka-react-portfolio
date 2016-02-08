import React from 'react'
import Header from './header.jsx'
import Menu from './menu.jsx'
import Accordion from './accordion.jsx'
import data from '../model/data.js'

export default class Master extends React.Component {
  constructor(props){
    super(props);

    let categories = data.categories;
    console.log(categories);
  }
  render(){
    return(
      <div>
        <Header />
        <Menu {...this.props}/>
      </div>
    )
  }
}

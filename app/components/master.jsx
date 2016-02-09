import React from 'react'
import Header from './header.jsx'
import Menu from './menu.jsx'
import Accordion from './accordion.jsx'
import data from '../model/data.js'

export default class Master extends React.Component {
  constructor(props){
    super(props);
    let categories = data.categories;
    this.setCategoryAsActive = this.setCategoryAsActive.bind(this);
  }

  setCategoryAsActive(category){
    this.setState({activeCategory: category})
  }

  render(){
    return(
      <div className="main">
        <Header />
        <div className="row page">
          <div className="small-4 columns align-left">
            <Accordion {...this.props}
              accordionCategories={data.categories}
              setActiveCategory={this.setCategoryAsActive}
              />
          </div>
          <div className="small-8 columns">

          </div>
        </div>

      </div>
    )
  }
}

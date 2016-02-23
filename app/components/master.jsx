import React from 'react'
import Header from './header.jsx'
import Accordion from './accordion.jsx'
import data from '../model/data1.js'

export default class Master extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeCategory: this.props.data.categories[0],
    }
    this.setCategoryAsActive = this.setCategoryAsActive.bind(this);
  }

  setCategoryAsActive(category){
    this.setState({activeCategory: category})
  }

  render(){
    return(
      <div className="main">
        <Header />
        <Accordion
            {...this.props}
            accordionCategories={data.categories}
            setActiveCategory={this.setCategoryAsActive}
            category={this.state.activeCategory}
        />
      </div>
    )
  }
}

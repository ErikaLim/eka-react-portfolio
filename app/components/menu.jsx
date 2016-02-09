import React from 'react'

export default class Menu extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeCategoryIndex: 0,
    }
  }

  setCategoryAsActive(categoryIndex){
    let newIndex = categoryIndex;
    this.setState({activeCategoryIndex: newIndex})
    this.props.setActiveCategory(this.props.category[newIndex])
  }

  render(){
    let names = this.props.data.categories.map((category, i)=> {
      return(
        <li className={ ` ${i === this.state.activeCategoryIndex ? 'is-active' : ''} `}>
          <a onClick={(()=>{this.setCategoryAsActive(i, category)})} key={i}>
            {category.name}
          </a>
        </li>
      );
    });

    return (
      <ul className="vertical menu" data-accordion-menu>
        {names}
      </ul>
    )
  }
}

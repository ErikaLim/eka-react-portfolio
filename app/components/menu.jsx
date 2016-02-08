import React from 'react'

export default class Menu extends React.Component {
  render(){
    let names = this.props.data.categories.map((category)=> {
      return(
        <li>
          <a key={category.name}>
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

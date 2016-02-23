import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AccordionContent from './accordion-content.jsx';


export default class Accordion extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeCategoryIndex: '',
    }
  }

  setCategoryAsActive(categoryIndex){
    let newIndex = categoryIndex;
    this.setState({activeCategoryIndex: newIndex})
    this.props.setActiveCategory(this.props.accordionCategories[newIndex])
  }

  render(){

    let categories = this.props.data.categories.map((accordionCategory, i) => {
      return(
        <div
          className={` accordion-item ${i === this.state.activeCategoryIndex ? 'is-active' : ''} title`}
          key={i}
         >
          <a onClick={(()=>{this.setCategoryAsActive(i, accordionCategory)})} className="accordion-title" role="tab">
            {accordionCategory['name']}
          </a>
          <AccordionContent
            {...this.props}
            isActive={i === this.state.activeCategoryIndex}

          />
        </div>
      )
    });

    return(

      <div className="accordion" data-accordion role="tablist">
        <ReactCSSTransitionGroup transitionName="ease" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {categories}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

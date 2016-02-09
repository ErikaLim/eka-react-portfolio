import React from 'react';

export default class AccordionContent extends React.Component{
  render(){
    let classes = 'accordion-content';
    if (this.props.isActive) {
      classes += ' accordion-active';
    }
    let info = this.props.category.info.map((category)=>{
      return(
        <div key={category.name}>
          <a className="info">{category.name}</a>
        </div>
      )
    });

    return(

      <div className={classes} role="tabpanel" data-tab-content>
        <div className="row">
          <div className="small-12 columns">
            {info}
          </div>
        </div>
      </div>
    )
  }
}

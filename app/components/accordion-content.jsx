import React from 'react';


export default class AccordionContent extends React.Component{
  render(){
    let classes = 'accordion-content';
    if (this.props.isActive) {
      classes += ' accordion-active';
    }
    return(
      <div className={classes} role="tabpanel" data-tab-content>
        <div className="row">
          <div className="small-6 columns">
          
          </div>
        </div>
      </div>
    )
  }
}

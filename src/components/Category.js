import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Category extends Component {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
  };

  render(){
    return(
      <div className="cat-card">
        <div style={{ display: 'inline-block', width: '25%', top: 5, bottom: 5 }} className="cat-card__img">
          <Button
            customClasses={['full-relative']}
            onClick={this.props.onClick}
          >
            <div className="pt-1 pb-1">
              <i className={`fa fa-${this.props.icon} fa-5x`} aria-hidden="true"/>
            </div>
          </Button>
        </div>
        <div style={{ display: 'inline-block', width: '65%' }}>
          Banana Banana Banana
        </div>
      </div>
    );
  }
}


export default Category;

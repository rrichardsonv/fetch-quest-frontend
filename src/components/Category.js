import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';

class Category extends Component {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
  };

  handleClick = (ev) => {
    ev && ev.preventDefault();
    this.props.onClick(this.props.route, this.props.icon);
  }

  render() {
    const categoryClasses = classnames('cat-card__img', {
      'fl-r': this.props.isSelected,
      'fl-l': !this.props.isSelected,
    });

    const ribbonClasses = classnames('ribbon', {
      'ribbon--secondary': this.props.isSelected,
    });
    return (
      <div style={{ position: 'relative', zIndex: 100 }}>
        <h1 className={ribbonClasses}>
          <strong className="ribbon-content">
            <div className="cat-card">
              <div style={{
                display: 'inline-block',
                boxShadow: '1px 1px 9px black'
              }}
                className={categoryClasses}
              >
                <Button
                  primary={!this.props.isSelected}
                  secondary={this.props.isSelected}
                  customClasses={['full-relative']}
                  onClick={this.handleClick}
                >
                  <div className="pt-1 pb-1">
                    <i className={`fa fa-${this.props.icon} fa-5x`} aria-hidden="true" />
                  </div>
                </Button>
                <div className='clearfix' />
              </div>
            </div>
            {this.props.description}
          </strong>
        </h1>
      </div>
    );
  }
}


export default Category;

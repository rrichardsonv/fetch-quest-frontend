import React, { Component } from 'react';
import Button from '../components/Button';
import asPage from './asPage';
import Category from '../components/Category';

const searchCategories = [{
  icon: 'magic',
  route: '/wild-magic',
  description: '10,000 Wild Magicks'
}, {
  icon: 'camera',
  route: '/wild-test',
  description: 'Fuckin test cat yo'
}]

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSearchRoute: '',
    };
  }

  handleSelectSearchRoute = (route, icon) => {
    this.setState({
      selectedSearchRoute: route,
      searchButton: icon,
    });
  }

  render() {
    return (
      <div className='content'>
        <div className='content-top clearfix'>
          <div className='clearfix'>
            <div className='inline-input inline-search-input'>
              <input className='search-bar' />
            </div>
            <div className='inline-input'>
              <Button
                secondary
                style={{
                  height: '5em',
                  borderRadius: '4px',
                }}
              >
                {!!this.state.searchButton
                  ? (
                    <i className={`fa fa-${this.state.searchButton} fa-3x`} aria-hidden="true" />
                  ) : (
                    <i className={`fa fa-search fa-3x`} aria-hidden="true" />
                  )}
              </Button>
            </div>
          </div>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
        {searchCategories.map((cat) => (
          <Category
            {...cat}
            onClick={this.handleSelectSearchRoute}
            isSelected={this.state.selectedSearchRoute === cat.route}
          />
        ))}
      </div>
    )
  }
}

export default asPage(Search);

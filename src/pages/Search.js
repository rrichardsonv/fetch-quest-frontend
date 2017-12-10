import React, { Component } from 'react';
import Button from '../components/Button';
import asPage from './asPage';
import Category from '../components/Category';


const API_URL = 'http://api.10000wands.com/api/v1' + '/search';

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
      selectedSearchRoute: '/general',
    };
  }

  handleSelectSearchRoute = (route, icon) => {
    this.setState({
      selectedSearchRoute: route,
      searchButton: icon,
    });
  }

  handleSubmit = (ev) => {
    ev && ev.preventDefault();
    const { query, random } = ev.target.elements;
    let request = `${API_URL}${this.state.selectedSearchRoute}`

    if(query.value) {
      request += '?q=' + query.value + '&'
    }

    if(random.checked) {
      request += request.endsWith('&') ? 'firstResult=true' : '?firstResult=true'
    } else {
      request += request.endsWith('&') ? 'firstResult=false' : '?firstResult=false'
    }

    this.props.getResults(request);
  }

  render() {
    return (
      <div className='content'>
        <div className='content-top clearfix'>
          <form onSubmit={this.handleSubmit}>
            <div className='clearfix'>
              <div className='inline-input inline-search-input'>
                <input className='search-bar' name='query' />
              </div>
              <div className='inline-input'>
                <Button
                  type="submit"
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
              <input type="checkbox" name="random"/>
              <span className="slider round" />
            </label>
          </form>
        </div>
        {searchCategories.map((cat) => (
          <Category
            {...cat}
            key={cat.route}
            onClick={this.handleSelectSearchRoute}
            isSelected={this.state.selectedSearchRoute === cat.route}
          />
        ))}
      </div>
    )
  }
}

export default asPage(Search);

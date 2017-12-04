import React, { Component } from 'react';
import Button from '../components/Button';
import asPage from './asPage';

class Search extends Component {
  render(){
    return(
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
                  height: '5em';
                  borderRadius: '4px';
                }}
              >
                <div>
                  Search
                </div>
              </Button>
            </div>
          </div>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
        <h1>Search</h1>
      </div>
    )
  }
}

export default asPage(Search);

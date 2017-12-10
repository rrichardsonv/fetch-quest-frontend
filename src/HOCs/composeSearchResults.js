import React, { Component } from 'react';
import { mockResult } from '../constants';

const composeSearchResults = (SearchComp, ResultComp) => {
  return class SearchWithResults extends Component {
    constructor(props){
      super(props);

      this.state = {
        results: [],
        isFetching: false,
        errors: [],
      };
    }

    clearResults = () => {
      this.setState({ results: [] });
    }

    getResults = (...args) => {
      console.log('Getting results for', ...args);
      this.setState({ results: [mockResult] });
      // setState({ isFetching: true, errors: [] })
      // make a network request in here
      // .then(response => setState({results: response, isFetching: false}))
      // .catch(err => setState({errors: err, isFetching: false}))
    }

    render() {
      const hasResults = !!this.state.results.length;
      return (
        hasResults ? <ResultComp
              results={this.state.results}
              clearResults={this.clearResults}
              {...this.props}
            />
          : <SearchComp
              getResults={this.getResults}
              {...this.props}
            />
      )
    }
  }
}


export default composeSearchResults;

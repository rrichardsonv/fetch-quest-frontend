import React, Component from 'react';

const composeSearchResults = (searchComp, resultComp) => {
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
      // setState({ isFetching: true, errors: [] })
      // make a network request in here
      // .then(response => setState({results: response, isFetching: false}))
      // .catch(err => setState({errors: err, isFetching: false}))
    }

    render() {
      return (
        {this.state.results.length
          ? <resultComp
              results={this.state.results}
              clearResults={this.clearResults}
              {...this.props}
            />
          : <searchComp
              getResults={this.getResults}
              {...this.props}
            />
        }
      )
    }
  }
}


export default composeSearchResults;

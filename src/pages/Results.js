import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import MagicResult from '../components/MagicResult';
import asPage from './asPage';

class Results extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    clearResults: PropTypes.func.isRequired,
  };

  render() {
    return(
      <div>
        <Button
          primary
          onClick={this.props.clearResults}
        >
        Go back!
        </Button>
        {this.props.results.map(result => {
          return <MagicResult key={result.id} {...result} />
        })}
      </div>
    );
  }
}

export default asPage(Results);

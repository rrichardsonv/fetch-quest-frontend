import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class Die extends Component {
  static propTypes = {
    k: PropTypes.string,
    value: PropTypes.string,
    range: PropTypes.array,
    type: PropTypes.string,
    number: PropTypes.string,
    modifier: PropTypes.string,
    startRolled: PropTypes.bool,
  }

  state = {
    displayValue: '',
    value: '',
    displayDice: '',
    isRolled: false,
  };

  roll = (low, high) => {
    const min = low < 0 ? 0 : low;
    return Math.round(Math.random() * (high - min) + min);
  }


  displayRoll = (ev) => {
    ev && ev.preventDefault();

    if(!this.state.isRolled) {
      this.setState({
        isRolled: true,
        displayValue: this.state.value,
      });
    } else {
      this.setState({
        displayValue: this.roll(...this.props.range),
      });
    }

  }
  componentWillMount(){
    const {
      number,
      type,
      modifier,
      value,
      startRolled,
    } = this.props;
    const prettyDice = `${number}${type}${modifier}`;
    this.setState({
      displayValue: startRolled ? value : prettyDice,
      value: value,
      displayDice: prettyDice,
      isRolled: startRolled,
    });
  }

  render(){
    return(
      <Button
        style={Object.assign({}, {
          margin: '3px',
          borderRadius: '25px',
          background: `url(${process.env.PUBLIC_URL}/${this.props.type}.png)`,
          width: '40px',
          height: '40px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          padding: '1px',
          fontWeight: 'bolder',
        }, this.state.isRolled && {fontSize: '25px'})}
          onClick={this.displayRoll}
      >
        <span
          style={{
            backgroundColor:' white',
            boxShadow: 'black 0px 2px 1px',
            marginLeft: '-6px',
            marginRight: '-6px',
            paddingLeft:' 6px',
            paddingRight:' 6px',

          }}
        >{ this.state.displayValue }</span>
      </Button>
    );
  }
}

export default Die;

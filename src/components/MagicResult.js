import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MagicResult extends Component {
  static propTypes = {
    result: PropTypes.shape({
      resultId: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.string,
      dice: PropTypes.array,
      isRolled: PropTypes.bool,
    }),
  };
  renderEmbeddedDice(dice, isRolled, description){
    switch(true){
      case dice.length < 1:
        return <div>{description}</div>
      case isRolled:
        const aThing = dice.reduce((acc, die) => {
          console.log(die);
          acc = acc.replace(new RegExp(`<DICE>${die.key}<DICE>`), die.value);
          return acc;
        }, description)
        console.log('isRolled', aThing);
        return (
          <div>
            {aThing}
          </div>
        )
      default:
        const bThing = dice.reduce((acc, die) => {
          const displayDie = `${die.number}${die.type}${die.modifier}`;
          acc = acc.replace(new RegExp(`<DICE>${die.key}<DICE>`), displayDie);
          return acc;
        }, description);
        console.log('default', bThing);
        return (
          <div>
            {bThing}
          </div>
        )
    }

  }

  render() {
    const {
      resultId,
      description,
      dice,
      isRolled,
    } = this.props;

    return(
      <div>
        <span>{ resultId }</span>
        {this.renderEmbeddedDice(dice, isRolled, description)}
      </div>
    );
  }
}

export default MagicResult;

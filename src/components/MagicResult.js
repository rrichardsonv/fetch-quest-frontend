import React, { Component } from 'react';
import Die from './Die';
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

  fn = () => {
    const { description, dice, isRolled } = this.props;
    return description.split(' ').map((word) => {
      const match = /<DICE>([A-Z])<DICE>/.exec(word)
      if(!!match){
        const diceProps = dice.find(({ k }) => k === match[1])
        return <Die key={diceProps.k} startRolled={isRolled} {...diceProps} />;
      }
      return word + ' ';
    })
  }

  render() {
    const {
      resultId,
    //   description,
    //   dice,
    //   isRolled,
    } = this.props;

    return(
      <div>
        <span>{ resultId }</span>
        <div style={{ marginTop: '8px', padding: '16px', fontSize: '16px'}}>
          <p
            style={{
              fontSize: '27px',
              background: 'white',
            }}
          >{this.fn()}</p>
        </div>
      </div>
    );
  }
}

export default MagicResult;

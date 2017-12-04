import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Button = (props) => {
  const { customClasses, style, primary, secondary, image, clear, ...buttonProps } = props;

  const buttonClasses = classnames("btn", {
    'btn--primary': primary,
    'btn--secondary': secondary,
    'btn--image': image,
  }, `${customClasses ? customClasses.join(' ') : ''}`);

  return (
    <button
      {...buttonProps}
      style={style}
      className={buttonClasses}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  customClasses: PropTypes.array,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  image: PropTypes.bool,
  clear: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;

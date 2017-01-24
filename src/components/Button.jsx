import React, { Component, PropTypes } from 'react'

class Button extends Component {
  render(){
    const _p = this.props;
    return (
      <button type={_p.type} onClick={_p.onClick}>
        {_p.label}
      </button>
    );
  }
}
Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}
export default Button;

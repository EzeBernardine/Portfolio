import React from "react";
import { ButtonStyled } from "./styles";
import propTypes from "prop-types";


const Button = React.forwardRef(
  ({ type, text, loading, disabled, click, icon, ...otherProps }, ref) => {
    const renderText = (
      <span className={"text__icon"}>
        <span>{text}</span>
        <span className={"icon"}>{icon}</span>
      </span>
    );

    return (
      <ButtonStyled
        ref={ref}
        type={type}
        onClick={click}
        hasIcon={!!icon}
        disabled={disabled}
        {...otherProps}
      >
        {loading ? <span>Loading</span> : !icon ? text : renderText}
      </ButtonStyled>
    );
  }
);

Button.propTypes = {
  type: propTypes.string.isRequired,
  click: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  icon: propTypes.any,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  variant: propTypes.string,
  size: propTypes.string
};

export default Button;

import React from "react";
import { ButtonStyled } from "./styles";
import propTypes from "prop-types";

const Button = React.forwardRef(
  ({ type, text, disabled, click, icon, ...otherProps }, ref) => {
    const renderText = (
      <span className={"text__icon"}>
        <span>{text}</span>
        <span className={"icon"}>{icon}</span>
      </span>
    );

    return (
      <ButtonStyled {...otherProps}>
        <button
          className="button"
          ref={ref}
          type={type}
          onClick={click}
          hasIcon={!!icon}
          disabled={disabled}
        >
          {!icon ? text : renderText}
        </button>
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
  size: propTypes.string,
};

export default Button;

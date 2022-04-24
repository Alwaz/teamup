import React from "react";
import "./button.scss";

const Button = ({buttonValue}) => {
  return (
    <div>
      <input className="btn" type="submit" value={buttonValue} />
    </div>
  );
};

export default Button;

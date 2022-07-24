import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  link: string;
};

function Button({ text, link }: ButtonProps) {
  return (<div className="buttonContainer">
    <p className="buttonText">{text}</p>
  </div>);
}

export default Button;

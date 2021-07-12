import React from "react";

import { Wrapper } from "./Button.styles";

interface IButton {
  text: string,
  callback: () => void
}

const Button = ({text, callback}:IButton) => (

  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
)

export default Button
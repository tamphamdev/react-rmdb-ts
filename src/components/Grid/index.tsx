import React from "react";

import { Content, Wrapper } from "./Grid.styles";

type Props = {
  header: string;
  children: any;
};

const Grid = ({ header, children }: Props) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;

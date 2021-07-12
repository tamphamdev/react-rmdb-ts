import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrumb.styles";

interface IProps {
  movieTitle:string
}

const BreadCrumb = ({movieTitle}:IProps) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span> | {movieTitle}</span>
    </Content>
  </Wrapper>
)

export default BreadCrumb
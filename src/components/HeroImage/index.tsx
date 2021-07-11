import React from "react";

// Styles
import { Wrapper, Content, Text } from './HeroImage.style'
interface IProp {
  image: string,
  title: string,
  text: string
}
const HeroImage = ({image,title,text}:IProp) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
)

export default HeroImage
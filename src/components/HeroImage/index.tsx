import React from "react";

// Styles
import { Wrapper, Content, Text } from "./HeroImage.style";
type Props = {
  image: string;
  title: string;
  text: string;
};
const HeroImage = ({ image, title, text }: Props) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;

import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--medGrey);
  border-radius: 6px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;


export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 6px;
  object-fit: cover;
`;
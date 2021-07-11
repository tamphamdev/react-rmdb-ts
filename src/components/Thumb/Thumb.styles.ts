import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  border: 1px solid #e0e0e0;

  :hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
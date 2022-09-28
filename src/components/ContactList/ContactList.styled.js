import styled from "styled-components";

export const List = styled.ul`
  max-width: 280px;
  width: 100%;
  font-size: 16px;
  line-height: 1.25;
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 375px) {
    max-width: 100%;
    padding: 0 30px;
  }
`;

export const Info = styled.p`
  font-size: 16px;
`;
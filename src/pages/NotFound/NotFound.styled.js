import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin: 0 auto 10px auto;
  border: none;
  border-radius: 20px;
  background-image: linear-gradient(to right top, #e0af5b, #dfb762, #ddbf69, #dbc771, #dace7a, #dace7a, #dace7a, #dace7a, #dbc771, #ddbf69, #dfb762, #e0af5b);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.7);
`;

export const Bold = styled.b`
  font-size: 64px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: darkred;

  &:hover,
  &:focus {
    color: darkviolet;
  }
`;
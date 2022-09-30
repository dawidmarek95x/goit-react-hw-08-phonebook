import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  & ul {
    display: flex;
    padding: 0;
    text-transform: uppercase;
    list-style-type: none;
  }

  & li {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 7px;
  border-radius: 7px;
  text-align: center;
  text-decoration: none;
  color: white;
  background: linear-gradient(to bottom, #3c3b3f, #605c3c);

  &:hover,
  &:focus {
    scale: 1.05;
    background: linear-gradient(to bottom, #606c88, #3f4c6b);
  }

  &.active {
    color: gold;
  }
`;
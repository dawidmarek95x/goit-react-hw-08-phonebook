import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  & ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  & li { 
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  
  & p {
    padding: 5px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;

    & span {
      font-weight: 700;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 7px;
  border: none;
  border-radius: 7px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
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
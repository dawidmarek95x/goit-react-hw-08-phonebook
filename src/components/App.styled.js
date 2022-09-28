import styled from 'styled-components';
import addressBook from '../images/address-book.svg'

export const AppWrapper = styled.div`
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

export const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.span`
  display: inline-block;
  width: 35px;
  height: 24px;
  background-image: url(${addressBook});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 35px 24px;
`;
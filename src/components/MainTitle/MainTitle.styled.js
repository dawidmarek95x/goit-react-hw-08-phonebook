import styled from 'styled-components';
import addressBook from '../../images/address-book.svg';

export const AppTitle = styled.h1`
  margin-bottom: 12px;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
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
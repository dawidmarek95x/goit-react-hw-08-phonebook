import styled from "styled-components";
import crossIcon from './images/cross.svg';
import phoneIcon from './images/phone.svg';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px solid gray;

  &:hover {
    border-color: #3B1818;
    
  }
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const Button = styled.button`
  min-width: 20px;
  min-height: 20px;
  margin-left: 5px;
  border: 1px solid rgb(49, 49, 49);
  border-radius: 50%;
  background-color: #F6FCCE;
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10px;
  transition: background-color 200ms;

  &:hover {
    background-color: rgb(245, 108, 108);
    transition: background-color 200ms;
  }
`;

export const TelBtn = styled(Button)`
  margin-left: auto;
  background-image: url(${phoneIcon});
  background-size: 12px;

  &:hover {
    background-color: rgb(119, 245, 108);
    transition: background-color 200ms;
  }
`;
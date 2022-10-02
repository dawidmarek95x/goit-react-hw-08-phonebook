import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  width: 100%;
  font-size: 16px;
`;

export const Input = styled.input`
  font-size: 14px;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid gray;
  outline: none;
  line-height: 1.25;
  background-color: #F6FCCE;
  border-radius: 5px;

  &:hover {
    border-color:rgb(59, 59, 59);
    box-shadow: 0px 0px 3px 0px rgba(59, 59, 59, 0.5);
    transition: border-color 400ms, box-shadow 400ms;
  }

  &:focus {
    border-color: #361C01;
    box-shadow: 0px 0px 6px 0px #361C01;
    transition: border-color 300ms, box-shadow 600ms;
  }
`;
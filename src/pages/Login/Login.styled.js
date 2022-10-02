import styled from "styled-components";

export const LoginForm = styled.div`
  padding: 15px 50px;
  width: 100%;
  
  & h2 {
    margin-top: 0;
    text-align: center;
  }

  & form {
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 10px;
  }

  & label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: 500;
  }

  & input {
    font-size: 14px;
    margin-top: 5px;
    padding: 5px;
    border: 1px solid gray;
    outline: none;
    line-height: 1.25;
    background-color: #F6FCCE;
    border-radius: 5px;

    &:hover {
      border-color: rgb(59, 59, 59);
      box-shadow: 0px 0px 4px 0px rgba(59, 59, 59, 0.6);
      transition: border-color 400ms, box-shadow 400ms;
    }

    &:focus {
      border-color: #361C01;
      box-shadow: 0px 0px 5px 0px #361C01;
      transition: border-color 600ms, box-shadow 600ms;
    }
  }

  & button {
    max-width: 120px;
    margin: 0 auto;
    padding: 5px 10px;
    border: 1px solid rgba(138, 63, 50, 0.8);
    border-radius: 5px;
    font-size: 14px;
    text-transform: capitalize;
    color: black;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 2px 0px rgba(227, 152, 22, 0.7);
    transition: color 600ms, border-color 600ms, background-color 600ms, box-shadow 600ms;

    &:hover {
      color: white;
      border-color: rgba(138, 63, 50, 0.8);
      background-color: rgba(138, 63, 50, 0.8);
      box-shadow: 0px 0px 4px 0px rgba(138, 63, 50, 0.8);
      transition: color 400ms, border-color 400ms, background-color 400ms, box-shadow 400ms;
    }
  }
`;
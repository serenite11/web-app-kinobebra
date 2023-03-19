import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";

const ButtonStyled = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 10px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 7px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  &:hover::before {
    border-color: #ff8100;

  }

`

const Button:FC<PropsWithChildren> = ({children}) => {
    return (
        <ButtonStyled type="submit">
            Вход
        </ButtonStyled>
    );
};

export default Button;

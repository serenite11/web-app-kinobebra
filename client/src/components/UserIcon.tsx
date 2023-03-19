import React, {useContext} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import styled from "styled-components";
import {MenuContext} from "../context/navState";

const UserButton = styled.div`
  position: relative;
  width: 39px;
  height: 39px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 10px;
  background-color: rgba(255, 255, 255, 0.15); /* значение для прозрачности фона */
  display: flex;
  justify-content: center; /* выравнивание по горизонтали */
  align-items: center; /* выравнивание по вертикали */
  &:hover{
    background-color: rgba(255, 255, 255, 0.2); /* значение для прозрачности фона */
    cursor: pointer;
  }
`

const UserIcon = () => {
    const {toggleUserMenuMode} = useContext(MenuContext)
    const clickHandler = () => {
        toggleUserMenuMode()
    };

    return (
        <UserButton onClick={clickHandler}>
            <LoginIcon className={'userButton'}/>
        </UserButton>
    );
};

export default UserIcon;
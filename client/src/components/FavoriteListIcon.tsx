import React, {useContext} from 'react';
import styled from "styled-components";
import {MenuContext} from "../context/navState";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteListButton = styled.div`
  position: relative;
  width: 39px;
  height: 39px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 2px;
  background-color: rgba(255, 255, 255, 0.15); /* значение для прозрачности фона */
  display: flex;
  justify-content: center; /* выравнивание по горизонтали */
  align-items: center; /* выравнивание по вертикали */
  &:hover{
    background-color: rgba(255, 255, 255, 0.2); /* значение для прозрачности фона */
    cursor: pointer;
  }

  @media ${props => props.theme.media.phoneAndTablet} {
    display: none;
  }
  
`

const FavoriteListIcon = () => {
    return (
        <FavoriteListButton>
            <FavoriteBorderIcon/>
        </FavoriteListButton>
    );
};

export default FavoriteListIcon;
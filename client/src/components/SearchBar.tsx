import {styled as muiStyled, alpha} from '@mui/material/styles';

import InputBase from "@mui/material/InputBase";


const UserButtonMenu = styled.div<IComponent>`
  width: calc(100% + 49px);
  height: 65px;
  margin-top: 10px;
  position: absolute;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15); /* значение для прозрачности фона */
  display: flex;
  flex-direction: column;
  justify-content: center; /* выравнивание по горизонтали */
  align-items: center; /* выравнивание по вертикали */
  transform: translateY(-150px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  ${props =>
          props.open &&
          css`
            transform: translateY(0);
            opacity: 1;
            z-index: 1;
          `}
  
  &:hover{
    background-color: rgba(255, 255, 255, 0.2); /* значение для прозрачности фона */
    cursor: pointer;
  }
  
} 
`
export const Search = muiStyled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
export const SearchIconWrapper = muiStyled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
export const StyledInputBase = muiStyled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

import React, {useContext, useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import  {MenuContext} from "../context/navState";
import {IComponent} from "./SideBar";

const SearchBar = () => {
       const {isUserMenuOpen} = useContext(MenuContext)

    return (
        <Search className={'search'}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Поиск…"
                inputProps={{'aria-label': 'search'}}
            />
              <UserButtonMenu open = {isUserMenuOpen} className={'userMenu'}>
                <Link to={'/login'}>Авторизация</Link>
                <Link to={'/register'}>Зарегистрироваться</Link>
              </UserButtonMenu>
        </Search>
    );
};

export default SearchBar;